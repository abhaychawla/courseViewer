(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseHeading', {
            templateUrl: 'courseList/course/courseHeading/courseHeading.html',
            controllerAs: 'vm',
            controller: 'CourseHeadingController'
        })

})();