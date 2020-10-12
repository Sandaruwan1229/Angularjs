var myApp1 = angular
                .module("myapplication1", [])
                .controller("mycontroller1" ,function ($scope) {
                    var students = [
                        {firstName : "Sandaruwa",lastName:"Kumarasinghe",gender:"Male",index:"180335F"},
                        {firstName : "Sithmi",lastName:"Amalka",gender:"Female",index:"180100F"},
                        {firstName : "Chandima",lastName:"Amarasena",gender:"Male",index:"180029V"},
                        {firstName : "Chalindu",lastName:"Kodikara",gender:"Male",index:"180325D"},
                        {firstName : "Kavishka",lastName:"Rathnaweera",gender:"Male",index:"180525M"},
                    ];

                    $scope.students = students;
                });

var myapp2 = angular
                .module("myapplication2",[])
                .controller("mycontroller2",function($scope){
                    var universities = [
                        {
                            uniname:"Moratuw University",
                            students:[
                                {name:"Sandaruwn"},
                                {name:"Sithmi"},
                                {name:"Chandima"},
                                {name:"Chalindu"} 
                            ]
                        },
                        {
                            uniname:"Peradeniya University",
                            students:[
                                {name:"Rishan"},
                                {name:"Sandun"},
                                {name:"Yasiru"},
                                {name:"Madhawa"} 
                            ]
                        },
                        {
                            uniname:"Ruhuna University",
                            students:[
                                {name:"Savindu"},
                                {name:"Dulanjaya"},
                                {name:"Sakila"},
                                {name:"Isuru"} 
                            ]
                        }
                    ];
                    $scope.universities = universities;
                });

var myapp3 = angular
                .module("myapplication3",[])
                .controller("mycontroller3", function($scope){
                    var claculator = {
                        firstnum : null,
                        secondnum : null
                    };

                    $scope.claculator = claculator;
                });
var myapp4 = angular
                .module("myapplication4",[])
                .controller("mycontroller4", function($scope){
                    var languages = [
                        {name:"C#",like:0,dislike:0},
                        {name:"Python",like:0,dislike:0},
                        {name:"Java",like:0,dislike:0},
                        {name:"C++",like:0,dislike:0},
                    ];

                    $scope.languages = languages;
                    
                    $scope.incrementLikes = function(language){
                        language.like++;
                    }
                    $scope.incrementDislikes = function(language){
                        language.dislike++;
                    }
                });

var myapp5 = angular
                .module("myapplication5",[])
                .controller("mycontroller5",function($scope){
                    var employees =[
                        {name:"Sandaruwan",dateOfBirth: new Date("February, 06 ,1998"),gender:"Male",salary:10000.99},
                        {name:"Sithmi",dateOfBirth: new Date("November, 21 ,1998"),gender:"Female",salary:20000.98},
                        {name:"Chandima",dateOfBirth: new Date("September, 02 ,1998"),gender:"Male",salary:50000},
                        {name:"Chalindu",dateOfBirth: new Date("Octomber, 06 ,1998"),gender:"Male",salary:60000.6578},
                        {name:"Thisal",dateOfBirth: new Date("March, 25 ,2005"),gender:"Male",salary:10000},
                    ];

                    $scope.employees = employees;
                    $scope.rowNumber = 3;
                });

var myapp6 = angular
                .module("myapplication6",[])
                .controller("mycontroller6",function($scope){
                    var employees =[
                        {name:"Sandaruwan",dateOfBirth: new Date("February, 06 ,1998"),gender:"Male",salary:10000.99},
                        {name:"Sithmi",dateOfBirth: new Date("November, 21 ,1998"),gender:"Female",salary:20000.98},
                        {name:"Chandima",dateOfBirth: new Date("September, 02 ,1998"),gender:"Male",salary:50000},
                        {name:"Chalindu",dateOfBirth: new Date("Octomber, 06 ,1998"),gender:"Male",salary:60000.6578},
                        {name:"Thisal",dateOfBirth: new Date("March, 25 ,2005"),gender:"Male",salary:10000},
                    ];

                    $scope.employees = employees;
                    $scope.rowNumber = 3;
                    $scope.typeOfSort = "name";
                });

var myapp7 = angular
                .module("myapplication7",[])
                .controller("mycontroller7",function($scope){
                    var employees =[
                        {name:"Sandaruwan",dateOfBirth: new Date("February, 06 ,1998"),gender:"Male",salary:10000.99},
                        {name:"Sithmi",dateOfBirth: new Date("November, 21 ,1998"),gender:"Female",salary:20000.98},
                        {name:"Chandima",dateOfBirth: new Date("September, 02 ,1998"),gender:"Male",salary:50000},
                        {name:"Chalindu",dateOfBirth: new Date("Octomber, 06 ,1998"),gender:"Male",salary:60000.6578},
                        {name:"Thisal",dateOfBirth: new Date("March, 25 ,2005"),gender:"Male",salary:10000},
                    ];

                    $scope.employees = employees;
                    $scope.sortColumn = "name";
                    $scope.reverseSort = false;

                    $scope.sortData = function(column){
                        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                        $scope.sortColumn = column;
                    };

                    $scope.getSortClass = function(column){
                        if ($scope.sortColumn == column) {
                            return $scope.reverseSort ? 'arrow-up': 'arrow-down';
                        }
                        return '';
                    };
                });
var myapp8 = angular
                .module("myapplication8",[])
                .controller("mycontroller8",function($scope){
                    var employees =[
                        {name:"Sandaruwan",dateOfBirth: new Date("February, 06 ,1998"),gender:"Male",city:"Kelaniya"},
                        {name:"Sithmi",dateOfBirth: new Date("November, 21 ,1998"),gender:"Female",city:"Kaluthara"},
                        {name:"Chandima",dateOfBirth: new Date("September, 02 ,1998"),gender:"Male",city:"Paliyagoda"},
                        {name:"Chalindu",dateOfBirth: new Date("Octomber, 06 ,1998"),gender:"Male",city:"Ahaliyagoda"},
                        {name:"Thisal",dateOfBirth: new Date("March, 25 ,2005"),gender:"Male",city:"Kelaniya"},
                    ];

                    $scope.employees = employees;
                    $scope.rowNumber = 3;
                });
var myapp9 = angular
                .module("myapplication9",[])
                .controller("mycontroller9",function($scope){
                    var employees =[
                        {name:"Sandaruwan",dateOfBirth: new Date("February, 06 ,1998"),gender:"Male",city:"Kelaniya"},
                        {name:"Sithmi",dateOfBirth: new Date("November, 21 ,1998"),gender:"Female",city:"Kaluthara"},
                        {name:"Chandima",dateOfBirth: new Date("September, 02 ,1998"),gender:"Male",city:"Paliyagoda"},
                        {name:"Chalindu",dateOfBirth: new Date("Octomber, 06 ,1998"),gender:"Male",city:"Ahaliyagoda"},
                        {name:"Thisal",dateOfBirth: new Date("March, 25 ,2005"),gender:"Male",city:"Kelaniya"},
                    ];

                    $scope.employees = employees;
                    
                    $scope.search = function(item){
                        if($scope.searchText1 == undefined){
                            return true;
                        }
                        else{
                            if(item.name.toLowerCase().indexOf($scope.searchText1.toLowerCase()) != -1 ||
                             item.city.toLowerCase().indexOf($scope.searchText1.toLowerCase()) != -1 ){
                                return true;
                            }
                        }
                        return false;
                    }
                });