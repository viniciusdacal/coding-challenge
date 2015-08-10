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
            controllerAs: 'vmFriends',
            templateUrl: 'app/components/friendsList/friends-list.html',
            restrict: 'E'
        };
        return directive;
    }

    /* @ngInject */
    function FriendsListBoxController(friendsListService) {
        var vm = this;
        vm.friendsList = [];
        getFriendsList();

        function getFriendsList() {
            friendsListService.getFriends()
                .then(function(result){
                    vm.friendsList = result.users;
                });
        }
    }
})();