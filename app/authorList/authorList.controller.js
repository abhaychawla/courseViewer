(function () {
    'use strict';

    angular
        .module('courseViewer')
        .controller('AuthorListController', ['BASE_API', '$http', function(BASE_API, $http) {
            var vm = this;

            vm.$onInit = function () {
                $http.get(BASE_API + '/authors')
                    .then(function(res) {
                        vm.authorList = res.data;
                    });
            }

        }]);

})();