(function () {
    'use strict';

    angular
        .module('courseViewer')
        .filter('timeFormat', function() {
            return function(minutes, seconds) {
                var hours = 0;
                while(minutes >= 60) {
                    hours++;
                    minutes-=60;
                }
                return (hours > 0 ? hours + 'h ':'') + minutes + 'm ' + seconds + 's ';
            }
        });

})();