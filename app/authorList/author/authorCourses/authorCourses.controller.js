(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('AuthorCoursesController', ['authorService', function(authorService) {
            var vm = this;

            vm.$onChanges = function(changes) {
                if(changes.author.currentValue != null) {
                    authorService.getCourses(vm.author.AuthorId)
                        .then(function(courses) {
                            vm.courses = courses;
                        });
                }
            };

        }]);

})();