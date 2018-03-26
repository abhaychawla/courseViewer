(function () {
    'use strict';

    angular
        .module('courseViewer')
        .value('componentBorders', true)
        .run(function (componentBorders) {
            if (componentBorders) {
                if (angular.module('courseViewer')._invokeQueue) {
                    angular.module('courseViewer')._invokeQueue.forEach(function (item) {
                        if (item[1] == 'component') {
                            var componentName = item[2][0].toUpperCase() + ' COMPONENT';
                            var componentProperties = item[2][1];
                            if (componentProperties.templateUrl) {
                                var templateUrl = componentProperties.templateUrl;
                                delete componentProperties.templateUrl;
                                componentProperties.template = '<div class="border border-dark p-3 m-3"><b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                            }
                            else {
                                var template = '<div class="component-borders">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                                componentProperties.template = template;
                            }
                        }
                    });
                }
            }
        });


})();