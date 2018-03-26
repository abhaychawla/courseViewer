(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseList', {
            templateUrl: 'courseList/courseList.html',
            controllerAs: 'vm',
            controller: 'CourseListController'
        });

})();