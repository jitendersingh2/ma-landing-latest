(function(window, angular, undefined) {

    'use strict';

    /**
     * Initialize entire application.
     *
     * @namespace Applications
     * @class malanding
     */
    angular
        .module('malanding', [

            'ngRoute',
            'malanding.config',
            'malanding.services.startUpGuideService',
            'malanding.services.homeFactory',
            'malanding.controllers.homeCtrl'

        ])
        .config ([
            '$routeProvider',
            'config',
            function ($routeProvider, config) {


                $routeProvider.
                    when ('/', {
                        templateUrl: config.partials.viewHome,
                        caseInsensitiveMatch: true
                    }).
                    otherwise({
                        redirectTo: '/'
                    });

            }]);

})(this, window.angular);
