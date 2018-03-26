(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('AuthorListController', ['authorService', function(authorService) {
            var vm = this;

            vm.$onInit = function () {
                authorService.getAllAuthors()
                    .then(function(authorList) {
                        vm.authorList = authorList;
                    });
            }

        }]);

})();