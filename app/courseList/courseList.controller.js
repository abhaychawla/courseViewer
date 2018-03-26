(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('CourseListController', ['BASE_API', '$http', function(BASE_API, $http) {
            var vm = this;

            vm.$onInit = function () {
                $http.get(BASE_API + '/courses')
                    .then(function(res) {
                        vm.courseList = res.data;
                    });
            }

        }]);

})();