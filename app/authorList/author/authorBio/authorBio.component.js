(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('authorBio', {
            bindings: {
                author: '<'
            },
            templateUrl: 'authorList/author/authorBio/authorBio.html',
            controllerAs: 'vm',
            controller: 'AuthorBioController'
        })

})();