beforeEach(module('textAnalysis'));

xdescribe('tweetCtrl', function() {
    var ctrl, scope, twitterService, location, routeParams;

    beforeEach(inject(function($controller, $rootScope, _twitterService_, $routeParams, $location) {
        scope = $rootScope.$new();
        location = $location;
        tweetText = 'Does anyone know where we can buy one of those "100 Days Without A Workplace Accident" signs? Ours has a lot of dried blood on it. #LSSC';
        twitterService = _twitterService_;
        routeParams = $routeParams;
        mockTime = "Wed Aug 29 17:12:58 +0000 2012";
        routeParams.handle = 'stephenathome';
        ctrl = $controller('tweetCtrl', {
            $scope: scope
        });
    }));

    it('should contain all functions and assignments', function() {
        expect(scope.loadingTweets).toBe(true);
        expect(scope.loadResults).toBeDefined();
        expect(scope.redirect).toBeDefined();
        expect(twitterService.loadTweets).toBeDefined();
        expect(scope.correctTime).toBeDefined();
    });

    it('should set twitterService.resultsTweet and navigate to the appropriate results path', function() {
        scope.loadResults(tweetText);
        expect(twitterService.resultsTweet).toEqual(tweetText);
        expect(location.$$url).toEqual('/results/stephenathome');
    });

    it('should redirect to the home view', function() {
        scope.redirect();
        expect(location.$$url).toEqual('/');
    });

    it('should use the twitterService to load tweets using the twitterHandle specified in the route', function() {
        twitterService.loadTweets(routeParams.handle).then(function(data) {

            expect(scope.twitterHandle).toEqual(routeParams.handle);
            expect(scope.tweets).not.toBe(null);
            expect(scope.loadingTweets).toBe(false);
            expect(scope.words).toBeArray();
        });
    });

    //it('should convert the time to MDY', function() {
    //    scope.correctTime(mockTime);
    //    scope.$apply();
    //        expect(scope.correctTime).toEqual('Wednesday');
//
    //});






});
