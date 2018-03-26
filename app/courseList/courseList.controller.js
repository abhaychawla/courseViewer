(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('CourseListController', ['courseService', function(courseService) {
            var vm = this;

            vm.$onInit = function () {
                courseService.getAllCourses()
                    .then(function(courseList) {
                        vm.courseList = courseList;
                    });
            }

        }]);

})();