(function () {
    angular.module('app')
        .controller('friendsController', friendsController);

    friendsController.$inject = ['$scope', 'friendsService', '$location'];

    function friendsController($scope, friendsService, $location) {
        var vm = this;

        vm.title = 'My Friends List';
        vm.friend = {};
        vm.friends = friendsService.list();

        vm.addFriend = function () {
            friendsService.add(vm.friend);
            vm.friends = friendsService.list();
            $location.path('/List');
        }
    }
})()