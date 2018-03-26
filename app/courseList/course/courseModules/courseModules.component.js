(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseModules', {
            templateUrl: 'courseList/course/courseModules/courseModules.html',
            controllerAs: 'vm',
            controller: 'CourseModulesController'
        })

})();