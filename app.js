(function () {
    var app = angular.module("quizApp", ['ngRoute']);
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/login', {
            templateUrl: 'users/templates/login.html',
            controller: 'accountController',
            controllerAs: 'vm'  
           }).when('/questions', {
               templateUrl: 'questions/templates/questions.html',
               controller: 'questionsController',
               controllerAs: 'vm'

        }).when('/resultsAndAnswes', {
            templateUrl: 'questions/templates/resultsAndAnswers.html',
            controller: 'questionsController',
            controllerAs: 'vm'  

        }).otherwise({ redirectTo: '/login' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
       
       
    })
    // hww enta 7adretak 7atet om el controller gwwa el app.config??
    app.controller("mainController", mainController);
    function mainController($rootScope, $location) {
        // om el main controller
        var vm = this;
        vm.logout = logout;

        function logout() {
            $rootScope.isLoggin = false;
            $location.path('/login');
        }
    }
})();

