(function(window, angular, undefined) {

    'use strict';


    angular
        .module('malanding.services.startUpGuideService', [

        ])
        .service('startUpGuideService', [
            '$http',
            '$q',
            'config',
            function($http, $q, config) {

                var serviceUrl = config.services.startUpGuide,
                    downloadedFileName   = config.downloadPDFName;


                /**
                 * @ngdoc method
                 * @name download
                 * @methodOf malanding.services.startUpGuideService. : startUpGuideService
                 * @description Download an Start-up Guide PDF.
                 * @returns {Object} promise promise
                 */
                this.download = function() {

                    var url         = serviceUrl,
                        contentType = 'application/pdf',
                        fileName    = downloadedFileName;

                    
                    return $http({
                        url: url,
                        method: 'GET',
                        responseType: 'blob'
                      })
                      .then(function(response) {
                        var blobFile = new Blob([response.data], { type: contentType });
                        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                          navigator.msSaveBlob(blobFile, fileName);
                        } else {
                          var blobFileUrl = URL.createObjectURL(blobFile);
                          var downloadLink = document.createElement("a");
                          downloadLink.setAttribute("href", blobFileUrl);
                          downloadLink.setAttribute("download", fileName);
                          downloadLink.style.visibility = "hidden";
                          document.body.appendChild(downloadLink);
                          downloadLink.click();
                          document.body.removeChild(downloadLink);
                        }
            
                        return response.data;
            
                      }, function(error) {
            
                          return $q.reject({});
                      });
                };

            }]);

})(this, window.angular);
