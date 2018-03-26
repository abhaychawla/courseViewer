(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('home', {
            templateUrl: 'home/home.html',
            controllerAs: 'vm',
            controller: 'HomeController'
        });

})();