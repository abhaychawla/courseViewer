(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseHeading', {
            bindings: {
                course: '<'
            },
            templateUrl: 'courseList/course/courseHeading/courseHeading.html',
            controllerAs: 'vm',
            controller: 'CourseHeadingController'
        })

})();