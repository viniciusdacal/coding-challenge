(function () {
    'use strict';

    angular
        .module('codingChallenge')
        .factory('friendsListService', friendsListService);

    /* @ngInject */
    function friendsListService($http, $log) {
        var service = {
            getFriends: getFriends
        };
        return service;

        ////////////////

        function getFriends() {
            return $http.get('app/mocks/friends-list.mock.json')
                    .then(getFriendsComplete)
                    .catch(getFriendsFailed);

        }

        function getFriendsComplete(response) {
            return response.data;
        }

        function getFriendsFailed(error) {
            $log.error('XHR Failed for getFriendsFailed.\n' + angular.toJson(error.data, true));
        }

    }
})();