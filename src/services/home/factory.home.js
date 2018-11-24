(function(window, angular, undefined) {

    'use strict';

    /**
     * Demo factory. Brings all services under one factory for the front-end to utilize.
     *
     * @namespace Services
     * @class homeFactory
     */

    angular
        .module('malanding.services.homeFactory', [
            'malanding.services.startUpGuideService'
        ])
        .factory('homeFactory', [
            '$q',
            'startUpGuideService',
            function($q, startUpGuideService) {

                var response;

                var rejectPromise = $q.reject();

                return {

                    downloadStartUpGuide: function() {

                        startUpGuideService.download();
                    }
                };
            }]);


})(this, window.angular);
