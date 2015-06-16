'use strict';

//var ROOT = "http://localhost:8080";

describe('home page tests', function() {
	var ROOT = "http://localhost:8080";

	it('should input twitter handle', function(){
		browser.get(ROOT + '/');
		expect(browser.getTitle()).toEqual('Tweet Analyzer');
		element(by.id('handle')).sendKeys('gvanburen');
		var radioButton = element(by.css('.orange div div div form div input'))
		browser.driver.actions().mouseMove(radioButton).perform();
		element.all(radioButton).then(function(elm){
			elm[0].click();
		});
		browser.debugger();
		element(by.buttonText('Analyze')).click();
	});


    //xit('should display the homepage with links and form input', function() {
    //    browser.get(ROOT + "/");
//
    //    //check for buttons
    //    expect(element.all(by.css('waves-effect')).count()).toBe(2);
//
    //    //check for input
    //    expect(element.all(by.tagName('input')).count()).toBe(1);
    //});

});
