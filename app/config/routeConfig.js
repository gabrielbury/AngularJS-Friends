(function () {
    angular.module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {


        $routeProvider
            .when('/List', {
                templateUrl: '/app/views/FriendsList.html',
                controller: 'friendsController',
                controllerAs: 'vm'
            }).when('/Add', {
                templateUrl: '/app/views/FriendsAdd.html',
                controller: 'friendsController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/List'
            });
    }
})();