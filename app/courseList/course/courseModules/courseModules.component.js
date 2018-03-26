(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseModules', {
            bindings: {
                course: '<'
            },
            templateUrl: 'courseList/course/courseModules/courseModules.html',
            controllerAs: 'vm',
            controller: 'CourseModulesController'
        })

})();