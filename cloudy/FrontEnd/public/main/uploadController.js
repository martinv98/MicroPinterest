angular.module('app1').controller('UploadCtrl',function($scope, $firebaseStorage, $firebaseObject, $http) {

    
    $scope.description = "";
    let fileToUpload = null;
    $scope.onChange = function onChange(fileList) {
        fileToUpload = fileList[0];
    };
    $scope.upload = function() {
        if (fileToUpload) {
            let jsonObject = {
                "name": fileToUpload.name,
                "path": fileToUpload.name,
                "rating": 10,
                "description": $scope.description,
                "author": $scope.currentUser.username
            }
            $http.post('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Picture/add', jsonObject);
            let storageRef = firebase.storage().ref(fileToUpload.name);
            let storage = $firebaseStorage(storageRef);
            let uploadTask = storage.$put(fileToUpload);
            uploadTask.$complete((snapshot) => {
                location.reload();
                let ref = firebase.database().ref("Files");
                let pushKey = ref.push().key;
                let formData = $firebaseObject(ref.child(pushKey));
                
                formData.name = fileToUpload.name;
                formData.timestamp = firebase.database.ServerValue.TIMESTAMP;
                formData.url = snapshot.downloadURL;
                formData.$save().then(() => {
                    angular.element("input[type='file']").val(null);
                    fileToUpload = null;
                    
                })
            });
        }
    };

   
})

