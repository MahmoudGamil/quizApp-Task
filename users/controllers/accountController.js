(function () {
    angular.module("quizApp")
    .controller("accountController", function ($scope, $http, $rootScope, $location ) {
        var vm = this;
        vm.email = "";
        vm.password = "";
        vm.login = login;
        vm.failedToLogin = false;
        vm.isLoggedin = false;
        activate();


        function activate() {
            if ($rootScope.isLoggedin) {
                $location.path('/questions');
            }
        }

         function login( ) {
             $http.get('/database/users.json').then(function (response) {
                 for (var i = 0; i < response.data.users.length; i++)
                     if (response.data.users[i].email == vm.email &&
                         response.data.users[i].password == vm.password) {
                         $rootScope.isLoggedin = true;
                         $location.path('/questions');

                     } else {
                         vm.failedToLogin = true;
                     }
             },
                function error(e) {
                    alert(e.message);
                }
                    


            )
        }
    })
})();