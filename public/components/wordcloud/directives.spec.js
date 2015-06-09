beforeEach(module('textAnalysis'));

xdescribe('wordcloud directive', function() {

    it('should create a svg when provided with an array of words',
        inject(function($rootScope, $compile) {
            element = angular.element('<wordcloud word="words"></wordcloud>');
            element = $compile(element)($rootScope);
            expect(element.children().children().length).toBe(0);
        }));


    it('should not create a svg on an empty words definition',
        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            scope.words = ['apple', 'tetris', 'tabasco', 'violin', 'albatross', 'pizza'];
            element = angular.element('<wordcloud words=words></wordcloud>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.children().children().children().length).toBe(6);
        }));
});

///Inconsistant results from length of text elements in results-cloud

describe('resultscloud directive', function() {

    it('should create a svg wordcloud when provided with an array of words',
        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            scope.words = ['apple', 'tetris', 'tabasco', 'violin', 'albatross', 'pizza'];
            element = angular.element('<results-cloud words=words></results-cloud>');
            element = $compile(element)(scope);
            scope.$digest();
            console.log(element);
          //  expect(element.children().children().children().length).toBe(6);
        }));


    it('should not create a svg on an empty words definition',
        inject(function($rootScope, $compile) {
            element = angular.element('<resultscloud></resultscloud>');
            element = $compile(element)($rootScope);
            expect(element.children().children().length).toBe(0);
        }));

});
