(function(){

    'use strict';

    angular.module('myApp').config(configApp);

    configApp.$inject = ['$routeProvider'];

    function configApp($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }

})();