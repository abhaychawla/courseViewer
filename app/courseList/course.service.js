(function () {
    'use strict';

    angular
        .module('courseViewer')
        .factory('courseService', ['BASE_API', '$http', function(BASE_API, $http) {
            var courseFactory = {
                getAllCourses: getAllCourses,
                getCourse: getCourse
            };

            function getAllCourses() {
                return $http.get(BASE_API + '/courses')
                            .then(function(res) {
                                return res.data;
                            });
            }

            function getCourse(courseId) {
                return $http.get(BASE_API + '/course/' + courseId + '/full')
                            .then(function(res) {
                                return res.data;
                            });
            }

            return courseFactory;
        }]);

})();