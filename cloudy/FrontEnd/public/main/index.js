angular.module('app1').controller('ctrl1',function($scope, $http, $firebaseStorage, $firebaseObject){
    


    $scope.getAllPictures = function(){
        $http.get('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Picture').then(function(data) {
            $scope.pictures = [];
            $scope.picturesUrls = [];
            $scope.pictures = data.data;
            data.data.forEach(element => {
                const storage = firebase.storage();
                const gsReference = storage.refFromURL('gs://micropinterestfb.appspot.com/CAPA-19.jpg');
                // Get the download URL
                gsReference.getDownloadURL()
                .then((url) => {
                    $scope.picturesUrls.push(url);            
                })
                .catch((error) => {
                    console.log("dasdasdasdsad");
                });
            })   
        });
    };

    $scope.getImgUrl = function(picture, id){
        const storage = firebase.storage();
        const gsReference = storage.refFromURL('gs://micropinterestfb.appspot.com/' + picture.name);
        // Get the download URL
        gsReference.getDownloadURL()
        .then((url) => {
            daco = document.getElementById(id);  
            daco.setAttribute("src",url);
            picture.url = url;    
            return url;
        })
        .catch((error) => {
            console.log("dasdasdasdsad");
        });
    }

    $scope.currentUser = {};

    $scope.getCurrentUser = function(){
        $http.get('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Users/getCurrentUser').success(function(data){
            $scope.currentUser = data;
            
        });
    };

    $scope.isDeleteVisible = function(pic){
        return $scope.currentUser.username == pic.author;
    }

    $scope.deleteImg = function(pic){
        $http.post('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Picture/delete',pic.id).then(function(){
            location.reload();
        })
    };

    $scope.logout = function(){
        $http.post('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Users/logout');
        $scope.getCurrentUser();
    }
    
    $scope.getNavBar = function(){
        return "templates/navbar.html"
    }

    $scope.getCard = function(){
        return "templates/imageCard.html"
    }

    $scope.getCardMenu = function(){
        return "templates/cardMenu.html"
    }

    $scope.getModalSignIn = function(){
        if(Object.keys($scope.currentUser).length === 0){
            return "templates/modalSignIn.html"
        }else{
            return "templates/loggedIn.html"
        }

    }

    $scope.getModalTemplate = function(){
        return "templates/modals.html"
    }

    $scope.getAbout = function(){
        return "templates/about.html"
    }

    $scope.image = {};

    $scope.updateImage = function(img){
        $scope.image = img;
        OpenMore('modal2');
    }

    $scope.currentView = "cardMenu";

    $scope.getCurrentView = function(){
        
        if($scope.currentView == "cardMenu"){
            return $scope.getCardMenu();
        }else if($scope.currentView == "about"){
            console.log($scope.pictures);
            return $scope.getAbout();
        }else if($scope.currentView == "cardMenu"){
            return $scope.getCardMenu();
        }else if($scope.currentView == "cardMenu"){
            return $scope.getCardMenu();
        }else if($scope.currentView == "cardMenu"){
            return $scope.getCardMenu();
        }
    }

    $scope.changeView = function(view){
        $scope.currentView = view;
    }

});