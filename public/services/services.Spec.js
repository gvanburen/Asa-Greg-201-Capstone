// TWITTER SERVICE

describe('twitterService', function() {
    var $rootScope, $httpBackend, twitterService;

    beforeEach(module('textAnalysis'));

    beforeEach(inject(function(_twitterService_, _$httpBackend_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        twitterService = _twitterService_;
    }));

    it('should contain twitterService', function() {
        expect(twitterService).not.toEqual(null);
        expect(twitterService).toBeDefined();
    });

    it('should contain empty string and empty array', function() {
        expect(twitterService.resultsTweet).toBe('');
        expect(twitterService.userTimeline).toEqual({});
    });

    it('loadTweet function should exist within twitterService', function() {
        expect(angular.isFunction(twitterService.loadTweets)).toBe(true);
    });

    it('should make a successful request to the twitter endpoint', function() {
        $httpBackend.expectGET('/api/StephenAtHome').respond(200);

        twitterService.loadTweets('StephenAtHome').then(function(data) {
            $rootScope.$digest();
            $httpBackend.flush();
            expect(data.length).toBe(20);
            expect(twitterObj.userTimeline['StephenAtHome']).toBeDefined();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
});

// AYLIEN SERVICE

describe('aylienService', function() {
    var $rootScope, $routeParams, $httpBackend, aylienService;

    beforeEach(module('textAnalysis'));

    beforeEach(inject(function(_aylienService_, _$routeParams_, _$httpBackend_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $routeParams = _$routeParams_;
        $httpBackend = _$httpBackend_;
        aylienService = _aylienService_;
    }));

    it('should contain aylienService', function() {
        expect(aylienService).not.toEqual(null);
        expect(aylienService).toBeDefined();
    });

    it('should contain an empty object called analysisData', function() {
        expect(aylienService.analysisData).toBeDefined();
        expect(aylienService.analysisData).toEqual({});
    });

    it('should contain 5 functions', function() {
        expect(aylienService.getSentiment).toBeDefined();
        expect(aylienService.getHashtags).toBeDefined();
        expect(aylienService.getEntities).toBeDefined();
        expect(aylienService.getClasses).toBeDefined();
        expect(aylienService.getConcepts).toBeDefined();
    });

    it('should make a successful request to the aylien-- SENTIMENT endpoint', function() {

        var mockEncodedText = 'Does%20anyone%20know%20where%20we%20can%20buy%20one%20of%20those%20%22100%20Days%20Without%20A%20Workplace%20Accident%22%20signs%3F%20Ours%20has%20a%20lot%20of%20dried%20blood%20on%20it.%20%23LSSC';

        $httpBackend.expectGET('/api/tweets/sentiment' + mockEncodedText).respond(200);

        aylienService.getSentiment().then(function(data) {
            $rootScope.$digest();
            expect(data.polarity).toBe('negative');
            expect(data.polarity_confidence).toBe(0.9857892422850992);
            expect(data.subjectivity).toBe('subjective');
            expect(data.subjectivity_confidence).toBe(1);
            expect(data.text).toBe("Does anyone know where we can buy one of those '100 Days Without A Workplace Accident' signs? Ours has a lot of dried blood on it. #LSSC");
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });

    it('should make a successful request to the aylien-- HASHTAGS endpoint', function() {

        var mockEncodedText = 'Does%20anyone%20know%20where%20we%20can%20buy%20one%20of%20those%20%22100%20Days%20Without%20A%20Workplace%20Accident%22%20signs%3F%20Ours%20has%20a%20lot%20of%20dried%20blood%20on%20it.%20%23LSSC';

        $httpBackend.expectGET('/api/tweets/hastags' + mockEncodedText).respond(200);

        aylienService.getHashtags().then(function(data) {
            $rootScope.$digest();
            expect(data.hashtags).toBeDefined();
            expect(data.hastags[0]).toEqual("#HundredDays");
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });

    it('should make a successful request to the aylien-- ENTITIES endpoint', function() {
        var mockEncodedText = 'Does%20anyone%20know%20where%20we%20can%20buy%20one%20of%20those%20%22100%20Days%20Without%20A%20Workplace%20Accident%22%20signs%3F%20Ours%20has%20a%20lot%20of%20dried%20blood%20on%20it.%20%23LSSC';

        $httpBackend.expectGET('/api/tweets/entities' + mockEncodedText).respond(200);

        aylienService.getEntities().then(function(data) {
            $rootScope.$digest();
            expect(data.entities).toBeDefined();
            expect(data.entities[0]).toEqual("keyword");
            expect(data.entities[0]).toEqual("organization");
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });


    it('should make a successful request to the aylien-- CLASSES endpoint', function() {
        var mockEncodedText = 'Does%20anyone%20know%20where%20we%20can%20buy%20one%20of%20those%20%22100%20Days%20Without%20A%20Workplace%20Accident%22%20signs%3F%20Ours%20has%20a%20lot%20of%20dried%20blood%20on%20it.%20%23LSSC';

        $httpBackend.expectGET('/api/tweets/classify' + mockEncodedText).respond(200);

        aylienService.getClasses().then(function(data) {
            $rootScope.$digest();
            expect(data.categories).toBeDefined();
            expect(data.categories[0].code).toEqual("12001000");
            expect(data.categories[0].confidence).toEqual(0.5335314835429471);
            expect(data.categories[0].label).toEqual("religion and belief - cult and sect");
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });

    it('should make a successful request to the aylien-- CONCEPTS endpoint', function() {
        var mockEncodedText = 'Does%20anyone%20know%20where%20we%20can%20buy%20one%20of%20those%20%22100%20Days%20Without%20A%20Workplace%20Accident%22%20signs%3F%20Ours%20has%20a%20lot%20of%20dried%20blood%20on%20it.%20%23LSSC';

        $httpBackend.expectGET('/api/tweets/concepts' + mockEncodedText).respond(200);

        aylienService.getConcepts().then(function(data) {
            $rootScope.$digest();
            expect(data.concepts).toBeDefined();
            expect(data.concepts[0]).toBe("http://dbpedia.org/resource/Hundred_Days");
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
});
