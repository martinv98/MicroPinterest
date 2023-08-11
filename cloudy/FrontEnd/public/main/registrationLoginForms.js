

angular.module('app1').controller('formCtrl',function($scope, $http){

    $scope.formData = {};

    $scope.resetForm = function(){
        $scope.formData = {};
    }

    $scope.isUsernameValid = function(){
        if($scope.formData.username == "" || $scope.formData.username == null){
            return false;
        }
        return true;
    }
    $scope.users = {};
    $scope.showLoginWarn = false;

    $scope.login = function(){
        //var Indata = {'username': $scope.formData.username, 'password': $scope.formData.password};
        /*$http.post('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Users/login', Indata).then(function(response){
            console.log(response);
        })*/
        $http.post('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Users/login?username=' + $scope.formData.username + '&password=' + $scope.formData.password).then(function(response){
            console.log(response);
            $scope.showLoginWarn = false;
            CloseModals('modal1');
            $scope.getCurrentUser();
            $scope.formData = {};
            
        }, function(response){
            $scope.showLoginWarn = true;
        });
    }

    $scope.register = function(){
        var registrationData = {
            "username": $scope.formData.username,
            "password": $scope.formData.password,
            "email": $scope.formData.email,
            "gender": $scope.formData.gender
        }
        $http.post('http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Users/register', registrationData).then(function(){
            CloseModals('modal0');
            $scope.formData = {};
        });
    }



    $scope.arePasswordsValid = function(){
        if($scope.formData.password === $scope.formData.confirmPassword && $scope.formData.password != "" && $scope.formData.password != null){
            return true;
        }else{
            return false;
        }
    }

    $scope.isGenderValid = function(){
        if($scope.formData.gender == null){
            return false;
        }else{
            return true;
        }
    }

    $scope.isEmailValid = function(){
        return String($scope.formData.email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    $scope.isSignUpDisabled = function(){
        return !($scope.isUsernameValid() && $scope.arePasswordsValid() && $scope.isEmailValid() && $scope.isGenderValid());
    };

    $scope.showUsernameWarn = function(){
        if($scope.isUsernameValid() == false && $scope.formData.username != null){
            return true;
        }else{
            return false;
        }
    };

    $scope.showEmailWarn = function(){
        if($scope.isEmailValid() == null && $scope.formData.email != null){
            return true;
        }else{
            return false;
        }
    };

    $scope.showPasswordWarn = function(){
        if($scope.arePasswordsValid() == false && $scope.formData.password != null){
            return true;
        }else{
            return false;
        }
    };

    
});