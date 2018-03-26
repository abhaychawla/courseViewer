(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseNavigator', {
            templateUrl: 'courseList/course/courseNavigator/courseNavigator.html',
            controllerAs: 'vm',
            controller: 'CourseNavigatorController'
        })

})();