(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('CourseController', ['courseService', function(courseService) {
            var vm = this;

            vm.$onInit = function() {
                if(vm.courseId) {
                    courseService.getCourse(vm.courseId)
                        .then(function(course) {
                            vm.course = course;
                        });
                }
            };

        }]);

})();