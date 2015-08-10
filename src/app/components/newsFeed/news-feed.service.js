(function() {
    'use strict';

    angular
        .module('codingChallenge')
        .factory('newsFeedService', newsFeedService);

    /* @ngInject */
    function newsFeedService($http, $log) {
        var service = {
            getLastNews: getLastNews
        };
        return service;

        ////////////////

        function getLastNews() {
            return $http.get('app/mocks/news-feed.mock.json')
                    .then(getNewsComplete)
                    .catch(getNewsFailed);

        }

        function getNewsComplete(response) {
            return response.data;
        }

        function getNewsFailed(error) {
            $log.error('XHR Failed for getNewsFailed.\n' + angular.toJson(error.data, true));
        }

    }
})();