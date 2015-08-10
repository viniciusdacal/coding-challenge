(function () {
    'use strict';

    angular
        .module('codingChallenge')
        .factory('statusBoxService', statusBoxService);

    /* @ngInject */
    function statusBoxService($http, $log, $rootScope, moment) {
        var service = {
            updateStatus: updateStatus
        };
        return service;

        ////////////////

        function updateStatus(status) {
            var now = moment();
            $rootScope.$broadcast('updateStatus', {
                text: status,
                type: 'self',
                created_at: now.toDate(),
                relative_time: now.fromNow()
            });
        }
    }
})();