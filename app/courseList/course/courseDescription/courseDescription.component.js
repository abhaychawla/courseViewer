(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseDescription', {
            bindings: {
                course: '<'
            },
            templateUrl: 'courseList/course/courseDescription/courseDescription.html',
            controllerAs: 'vm',
            controller: 'CourseDescriptionController'
        })

})();