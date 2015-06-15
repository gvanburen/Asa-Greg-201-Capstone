

beforeEach(module('textAnalysis'));

describe('homeCtrl', function() {
    var ctrl, scope, html, anchorScroll, location;
    beforeEach(inject(function($controller, $rootScope, $anchorScroll, $location) {
        scope = $rootScope.$new();
        location = $location;
        element = angular.element(html);
        scope.userInput = {
            text: "stephenathome",
            timeline: "user"
        };
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

    it('should include a SideNav on smaller browser sizes', function() {
        window.resizeTo(700, 1000);
        var button = element.find('.button-collapse');
        var sideNav = element.find('.side-nav');
        button.click();
        expect('.button-collapse').toBeTruthy();
    });

    it('should call twitter api and navigate to tweets url', function() {
        scope.loadTweets();
        expect(location).toEqual('/tweets');
    });


});
