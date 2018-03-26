(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseAuthorInfo', {
            templateUrl: 'courseList/course/courseAuthorInfo/courseAuthorInfo.html',
            controllerAs: 'vm',
            controller: 'CourseAuthorInfoController'
        })

})();