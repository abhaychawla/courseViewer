(function () {
    'use strict';

    angular
        .module('courseViewer')
        .component('authorNavigator', {
            templateUrl: 'authorList/author/authorNavigator/authorNavigator.html',
            controllerAs: 'vm',
            controller: 'AuthorNavigatorController'
        })

})();