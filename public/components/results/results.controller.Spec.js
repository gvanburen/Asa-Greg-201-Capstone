beforeEach(module('textAnalysis'));

describe('resultsCtrl', function() {
    var ctrl, scope, twitterService, aylienService;

    beforeEach(inject(function($controller, $rootScope, _twitterService_, _aylienService_) {
        scope = $rootScope.$new();
        twitterService = _twitterService_;
        twitterService.resultsTweet = 'Does anyone know where we can buy one of those "100 Days Without A Workplace Accident" signs? Ours has a lot of dried blood on it. #LSSC';
        aylienService = _aylienService_;
        ctrl = $controller('resultsCtrl', {
            $scope: scope
        });
    }));

    it('all functions should be defined', function() {
        expect(scope.words).toBeDefined();

        expect(aylienService.getSentiment).toBeDefined();
        expect(aylienService.getHashtags).toBeDefined();
        expect(aylienService.getEntities).toBeDefined();
        expect(aylienService.getClasses).toBeDefined();
        expect(aylienService.getConcepts).toBeDefined();
    });

    it('should transform twitterService.resultsTweet into an array of words', function() {
        expect(scope.words).toEqual(['Does', 'anyone', 'know', 'where', 'we', 'can', 'buy', 'one', 'of', 'those', '"100', 'Days', 'Without', 'A', 'Workplace', 'Accident"', 'signs?', 'Ours', 'has', 'a', 'lot', 'of', 'dried', 'blood', 'on', 'it.', '#LSSC']);
        expect(scope.words.length).toEqual(27);
    });


    it('should return sentiment data to scope and turn off loading indicator', function() {
        aylienService.getSentiment(twitterService.resultsTweet).then(function(data) {
            expect(scope.sentiment).not.toEqual(null);
            expect(scope.loadingSentiment).toEqual(false);
        });
    });

    it('should return hashtags data to scope and turn off loading indicator', function() {
        aylienService.getHashtags(twitterService.resultsTweet).then(function(data) {

            expect(scope.hashtags).not.toEqual(null);
            expect(scope.loadingHashtags).toEqual(false);
        });
    });
    it('should return entities data to scope and turn off loading indicator', function() {
        aylienService.getSentiment(twitterService.resultsTweet).then(function(data) {

            expect(scope.entities).not.toEqual(null);
            expect(scope.loadingEntities).toEqual(false);
        });
    });

    it('should return classes data to scope and turn off loading indicator', function() {
        aylienService.getSentiment(twitterService.resultsTweet).then(function(data) {

            expect(scope.categories).not.toEqual(null);
            expect(scope.loadingClasses).toEqual(false);
        });
    });

    it('should return concepts data to scope and turn off loading indicator', function() {
        aylienService.getConcepts(twitterService.resultsTweet).then(function(data) {

            expect(scope.concepts).not.toEqual(null);
            expect(scope.loadingConcepts).toEqual(false);
        });
    });
});
