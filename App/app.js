var app = angular.module("app",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("ly",{
            url:"/ly",
            templateUrl:"./App/View/ly.html"
        })
        .state("two",{
            url:"/two",
            templateUrl:"./App/View/two.html"
        })
        .state("three",{
            url:"/three",
            templateUrl:"./App/View/three.html"
        })
        .state("four",{
            url:"/four",
            templateUrl:"./App/View/four.html"
        })
        .state("five",{
            url:"/five",
            templateUrl:"./App/View/five.html"
        })
    $urlRouterProvider.otherwise("/ly")
})
