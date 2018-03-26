(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('authorCourses', {
            templateUrl: 'authorList/author/authorCourses/authorCourses.html',
            controllerAs: 'vm',
            controller: 'AuthorCoursesController'
        })

})();