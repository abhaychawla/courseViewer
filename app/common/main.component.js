(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('main', {
            templateUrl: 'common/main.html',
            controllerAs: 'vm',
            controller: 'MainController'
        });

})();