
angular.module("demo").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

        $stateProvider
            .state('tps', {
                url: '/TPS',
                templateUrl: 'client/term/views/TermParams.html',
                controller: 'TPSCtrl',
                controllerAs: 'vm'

            });

        $urlRouterProvider.otherwise("/TPS");
    }]);
