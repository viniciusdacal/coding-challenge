(function () {
    'use strict';

    angular
        .module('codingChallenge')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
