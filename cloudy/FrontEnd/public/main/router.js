const app = angular.module("app1", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/courses", {
        templateUrl : "" 
    })
    .when("/internships", {
        templateUrl : "" 
    });
});