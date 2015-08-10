(function () {
    'use strict';

    angular
        .module('codingChallenge')
        .directive('statusBox', statusBox);

    /* @ngInject */
    function statusBox () {
        // Usage: <status-box></status-box>
        //
        var directive = {
            bindToController: true,
            controller: StatusBoxController,
            controllerAs: 'vm',
            templateUrl: 'app/components/statusBox/status-box.html',
            restrict: 'E'
        };
        return directive;
    }

    /* @ngInject */
    function StatusBoxController (statusBoxService) {
        var vm = this;
        vm.status = {};
        vm.updateStatus = updateStatus;

        function updateStatus() {
            statusBoxService.updateStatus(vm.status.message);
            vm.status.message = '';
        }

    }
})();