(function () {
    'use strict';

    angular
        .module('courseViewer')
        .factory('authorService', ['BASE_API', '$http', function(BASE_API, $http) {
            var authorFactory = {
                getAllAuthors: getAllAuthors,
                getAuthor: getAuthor,
                getCourses: getCourses
            };

            function getAllAuthors() {
                return $http.get(BASE_API + '/authors')
                            .then(function(res) {
                                return res.data;
                            });
            }

            function getAuthor(authorId) {
                return $http.get(BASE_API + '/author/' + authorId)
                            .then(function(res) {
                                return res.data;
                            });
            }

            function getCourses(authorId) {
                return $http.get(BASE_API + '/author/' + authorId + '/courses')
                            .then(function(res) {
                                return res.data;
                            });
            }

            return authorFactory;
        }]);

})();