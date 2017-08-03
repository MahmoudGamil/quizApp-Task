(function () {
    angular.module("quizApp")
    .controller("questionsController", function ($scope, $http, $location, $rootScope) {
        var vm = this;
        vm.questions = [];
        vm.selectedAnswer = [];
        vm.submit = submit;
        vm.activate = activate;
        vm.result = 0;
        vm.isSubmitted = false;

        activate();
        function activate() {
            if (!$rootScope.isLoggedin) {
                $location.path('/login');
            }
            $http.get('/database/questionsAndAnswers.json')
            .then(function (response) {
              
                vm.questions = response.data.questions;
            }, 
            function error(e) {
                alert(e.message);
            })  
        }
        function submit() {
            vm.isSubmitted = true;
            for (var i = 0; i < vm.questions.length; i++) {
                if (vm.selectedAnswer[i] == vm.questions[i].correctAnswer) {
                    vm.result++;
                    
                }
            }
        }

    })
})();