describe("testing config/routes", function() {

    beforeEach(module('textAnalysis'));

    it('should load the appropriate template and controller',
        inject(function($location, $rootScope, $httpBackend, $route) {

            expect($route.routes['/'].controller).toBe('homeCtrl');
            expect($route.routes['/'].templateUrl).toEqual('./components/home/home.view.html');

            expect($route.routes['/tweets/:handle'].controller).toBe('tweetCtrl');
            expect($route.routes['/tweets/:handle'].templateUrl).toEqual('./components/tweets/tweets.view.html');

            expect($route.routes['/results/:handle/'].controller).toBe('resultsCtrl');
            expect($route.routes['/results/:handle/'].templateUrl).toEqual('./components/results/results.view.html');

            expect($route.routes[null].redirectTo).toEqual('/');
        }));
});
