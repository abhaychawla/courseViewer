(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('authorList', {
            templateUrl: 'authorList/authorList.html',
            controllerAs: 'vm',
            controller: 'AuthorListController'
        });

})();