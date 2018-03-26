(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('CourseAuthorInfoController', ['timeFormatFilter', function(timeFormatFilter) {
            var vm = this;

            vm.$onChanges = function(changes) {
                if(vm.courseVm !=null && vm.courseVm.course !=null) {
                    var course = vm.courseVm.course;
                    var minutes = 0, seconds = 0;
                    course.Modules.forEach(function(module) {
                        minutes += module.Minutes;
                        seconds += module.Seconds;
                    });
                    vm.courseTime = timeFormatFilter(minutes, seconds);
                    vm.courseReleased = new Date(course.Released).toLocaleDateString();
                }
            }

        }]);

})();