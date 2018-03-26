(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseAuthorInfo', {
            bindings: {
                author: '<'
            },
            require: {
                courseVm: '^course'
            },
            templateUrl: 'courseList/course/courseAuthorInfo/courseAuthorInfo.html',
            controllerAs: 'vm',
            controller: 'CourseAuthorInfoController'
        })

})();