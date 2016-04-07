(function () {
    angular.module('app')
        .service('friendsService', friendsService);

    friendsService.$inject = ['$http'];


    function friendsService($http) {

        var _list = [
                { friendName: 'Gabriel', friendEmail: 'gabriel@github.com', friendPhone: '11 99907-6437' },
                { friendName: 'Maria', friendEmail: 'maria@github.com', friendPhone: '11 99907-6438' }
        ];

        this.list = function () {
            return _list;
        }

        this.add = function (friend) {
            console.log(_list);
            _list.push(friend);
        }
    }


})();