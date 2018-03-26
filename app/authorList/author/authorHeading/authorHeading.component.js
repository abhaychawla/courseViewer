(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('authorHeading', {
            bindings: {
                author: '<'
            },
            templateUrl: 'authorList/author/authorHeading/authorHeading.html',
            controllerAs: 'vm',
            controller: 'AuthorHeadingController'
        });

})();