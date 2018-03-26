(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('navigator', {
            templateUrl: 'common/navigator/navigator.html',
            controllerAs: 'vm',
            controller: 'NavigatorController'
        });

})();