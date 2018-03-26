(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('course', {
            bindings: {
                courseId: '<'
            },
            templateUrl: 'courseList/course/course.html',
            controllerAs: 'vm',
            controller: 'CourseController'
        });

})();