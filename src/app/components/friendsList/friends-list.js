(function () {
    'use strict';

    angular
        .module('codingChallenge')
        .directive('friendsList', friendsList);

    /* @ngInject */
    function friendsList() {
        // Usage: <friends-list></friends-list>
        //
        var directive = {
            bindToController: true,
            controller: FriendsListBoxController,
            controllerAs: 'vm',
            templateUrl: 'app/components/friendsList/friends-list.html',
            restrict: 'E'
        };
        return directive;
    }

    /* @ngInject */
    function FriendsListBoxController(friendsListService, $scope, $timeout) {
        var vm = this;
        vm.friendsList = {};
        vm.friendsList.result = [];
        getFriendsList();

        function getFriendsList() {
            friendsListService.getFriends()
                .then(function(result){
                    $timeout(function(){
                        vm.friendsList.result = result.users;
                    },100);
                });
        }
    }
})();