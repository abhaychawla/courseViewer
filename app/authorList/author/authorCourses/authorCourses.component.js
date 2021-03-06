(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('authorCourses', {
            bindings: {
                author: '<'
            },
            templateUrl: 'authorList/author/authorCourses/authorCourses.html',
            controllerAs: 'vm',
            controller: 'AuthorCoursesController'
        })

})();