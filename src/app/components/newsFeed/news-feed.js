(function () {
    'use strict';

    angular
        .module('codingChallenge')
        .directive('newsFeed', newsFeed);

    /* @ngInject */
    function newsFeed () {
        // Usage: <news-feed></news-feed>
        //
        var directive = {
            bindToController: true,
            controller: NewsFeedBoxController,
            controllerAs: 'vm',
            templateUrl: 'app/components/newsFeed/news-feed.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;
    }

    /* @ngInject */
    function NewsFeedBoxController(newsFeedService) {
        var vm = this;
        vm.lastNews = [];
        getLastNews();


        function getLastNews() {
            newsFeedService.getLastNews()
                .then(function(result){
                    angular.forEach(result, function(item){
                        item.relative_time = moment(new Date(item.created_at)).fromNow();
                        item.user.profile_image_url = 'https://s3.amazonaws.com/uifaces/faces/twitter/vinicius_dacal/48.jpg';
                    });
                    vm.lastNews = result;
                });
        }
    }
})();