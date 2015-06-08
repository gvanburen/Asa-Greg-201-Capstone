beforeEach(module('textAnalysis'));

describe('homeCtrl', function() {
    var ctrl, scope, anchorScroll, location;
    beforeEach(inject(function($controller, $rootScope, $anchorScroll, $location) {
        scope = $rootScope.$new();
        location = $location;
        anchorScroll = $anchorScroll;
        ctrl = $controller('homeCtrl', {
            $scope: scope
        });
    }));

    it('homeCtrl controller should exist', function() {
        expect(ctrl).toBeTruthy();
        expect(ctrl).not.toBe(null);
    });

    //Testing Navigation Anchorscroll links...

    it('should navigate to the hash id and scroll to the specified id', function() {
        scope.scrollTo('analyze');
        expect(location.$$url).toEqual("#analyze");
        scope.scrollTo('intro');
        expect(location.$$url).toEqual("#intro");
    });

    //it('should show and hide the sideNav onclick', function(){
    //  scope.showSideNav();
    //  
    //
    //
    //});

    it('should contain an empty userInput object', function() {
        expect(scope.userInput).toBe.empty;
        expect(scope.userInput).toBeDefined();
    });


    //it('should navigate to tweets route when scope.submitHandle.userInput is $valid', function() {
    //    scope.submitHandle = {
    //      userInput: "stephenathome"
    //    };
    //    scope.submitHandle.userInput.$valid = true;
    //    scope.userInput.text = 'stephenathome';
    //
    //    scope.loadTweets();
    //    expect(location.path()).toEqual('/tweets/stephenathome');
    //});



});
