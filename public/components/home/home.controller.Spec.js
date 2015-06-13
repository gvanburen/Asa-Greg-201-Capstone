//Add Test for SideNav
//Add test for location change

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

    it('should contain an empty userInput object', function() {
        expect(scope.userInput).toBe.empty;
        expect(scope.userInput).toBeDefined();
    });


});
