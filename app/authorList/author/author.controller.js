(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('AuthorController', ['authorService', function(authorService) {
            var vm = this;

            vm.$onInit = function() {
                if(vm.authorId) {
                    authorService.getAuthor(vm.authorId)
                        .then(function(author) {
                            vm.author = author;
                        });
                }
            };

        }]);

})();