(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('courseDiscussion', {
            templateUrl: 'courseList/course/courseDiscussion/courseDiscussion.html',
            controllerAs: 'vm',
            controller: 'CourseDiscussionController'
        })

})();