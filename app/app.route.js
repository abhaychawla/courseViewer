(function () {
    'use strict';

    angular
        .module('courseViewer')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<home></home>'
                })
                .state('courses', {
                    url: '/courses',
                    template: '<course-list></course-list>'
                })
                .state('course', {
                    url: '/course/{courseId}',
                    resolve: {
                        courseId: function($stateParams) {
                            return $stateParams.courseId;
                        }
                    },
                    template: '<course course-id="$resolve.courseId"></course>',
                    redirectTo: 'course.modules'
                })
                .state('course.modules', {
                    url: '/modules',
                    template: '<course-modules course="vm.course"></course-modules>'
                })
                .state('course.description', {
                    url: '/description',
                    template: '<course-description course="vm.course"></course-description>'
                })
                .state('course.discussion', {
                    url: '/discussion',
                    template: '<course-discussion></course-discussion>'
                })
                .state('authors', {
                    url: '/authors',
                    template: '<author-list></author-list>'
                })
                .state('author', {
                    url: '/author/{authorId}',
                    resolve: {
                        authorId: function($stateParams) {
                            return $stateParams.authorId;
                        }
                    },
                    template: '<author author-id="$resolve.authorId"></author>',
                    redirectTo: 'author.courses'
                })
                .state('author.courses', {
                    url: '/courses',
                    template: '<author-courses author="vm.author"></author-courses>'
                })
                .state('author.bio', {
                    url: '/bio',
                    template: '<author-bio author="vm.author"></author-bio>'
                });

            $urlRouterProvider.otherwise('/');

        }]);

})();