//< reference path = "Script\angular.min.js" / >

const newLocal = "myapplication";
// create module
var myApp = angular.module(newLocal, []);

// create controller
var myController = function ($scope) {
    $scope.message = "Anguler Js Tutorial"
}

//register the contoller to module
myApp.controller("myController", myController);