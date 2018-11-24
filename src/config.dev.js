(function (window, angular, undefined) {

    'use strict';

    /**
     * Create a configuration object shared between all modules.
     *
     * @namespace Constant
     * @class config
     */
    angular
        .module('malanding.config', [])
        .constant('config', {

            namespace: 'malanding',
            analytics: false,
            debug: true,
            appUrlRoot: '/members/secure/account/malanding/',
            servicesTimeout: 120000,
            downloadPDFName: 'Start-up Guide',
            services: {
                startUpGuide: '/assets/members/secure/apps/malanding/pdf/U14314-2018-Medicare-Advantage-Onboarding-Guide-r001.pdf'
            },
            partials: {
                viewHome: '/components/home/view.home.htm'
            }
        });

})(this, window.angular);
