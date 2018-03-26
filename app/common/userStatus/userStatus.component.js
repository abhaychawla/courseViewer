(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('userStatus', {
            templateUrl: 'common/userStatus/userStatus.html',
            controllerAs: 'vm',
            controller: 'UserStatusController'
        });

})();