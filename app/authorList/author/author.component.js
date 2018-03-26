(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('author', {
            bindings: {
                authorId: '<'
            },
            templateUrl: 'authorList/author/author.html',
            controllerAs: 'vm',
            controller: 'AuthorController'
        });

})();