(function(){

    'use strict';

    angular.module('app.components').directive('appVersion', appVersion);

    appVersion.$inject = ['version'];

    function appVersion(version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }

})();
