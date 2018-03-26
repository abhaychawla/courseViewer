(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseDescription', {
            templateUrl: 'courseList/course/courseDescription/courseDescription.html',
            controllerAs: 'vm',
            controller: 'CourseDescriptionController'
        })

})();