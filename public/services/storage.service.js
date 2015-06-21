'use strict';

angular.module('textAnalysis')
    .factory('storageService', ['$window',
        function($window) {
        	return {
        		setData: function(val){
        			$window.localStorage.setItem('tweet', val);
        			return this;
        		},
        		getData: function(){
        			return $window.localStorage.getItem('tweet');
        		}
        	};
       	}]);