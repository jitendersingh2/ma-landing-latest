(function(window, angular, undefined) {
  "use strict";

  /**
   * Home/malanding view controller.
   *
   * @namespace Controllers
   * @class homeCtrl
   */
  angular
    .module("malanding.controllers.homeCtrl", [
      'malanding.services.homeFactory'
    ])
    .controller("homeCtrl", [
      'homeFactory',
      function(
        homeFactory
      ) {
        var self = this;

        this.downloadStartUpGuide = function() {
          homeFactory.downloadStartUpGuide();
        };
    }
    ]);
})(this, window.angular);
