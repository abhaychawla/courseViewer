(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('authorBio', {
            templateUrl: 'authorList/author/authorBio/authorBio.html',
            controllerAs: 'vm',
            controller: 'AuthorBioController'
        })

})();