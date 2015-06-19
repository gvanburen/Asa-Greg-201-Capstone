'use strict';
var root = "http://localhost:8080";
var username = "gvanburen";

describe('Tweet Analyzer App', function(){
	it('should have a title', function(){
		browser.get(root + "/");
		expect(browser.getTitle()).toEqual("Tweet Analyzer");
	});

	it('should input twitter username', function(){
		element(by.id("handle")).sendKeys(username);
		element(by.buttonText("Analyze")).click();
	});

	it('should navigate to the tweets page', function(){
		expect(browser.getCurrentUrl()).toContain("#/tweets/");
	});

	it('should select a tweet from the displayed tweets', function(){
		expect(element.all(by.repeater("tweet in tweets")).count()).toMatch(24);
		element.all(by.repeater("tweet in tweets")).get(2).click();
	});

	it('should navigate to the results page', function(){
		expect(browser.getCurrentUrl()).toContain("#/results/");
	});

	it('should display the word cloud and results', function(){
		expect(element(by.tagName("results-cloud")).isDisplayed()).toBe(true);
		expect(element(by.id("hash")).isDisplayed()).toBe(true);
		expect(element(by.id("cat")).isDisplayed()).toBe(true);
		expect(element(by.id("ent")).isDisplayed()).toBe(true);
		expect(element(by.id("sent")).isDisplayed()).toBe(true);
		expect(element(by.id("cont")).isDisplayed()).toBe(true);
	});

	it('should open up the accordion', function(){
		var hash = element(by.id("hash"))
		var results = element.all(by.css(".collapsible-header"));
		var info = element(by.css(".collapsible-body"));
		
		expect(results.count()).toEqual(5);
		expect(info.isDisplayed()).toBe(false);
		browser.actions().doubleClick(results.get(0)).perform();
		hash.click();
		expect(info.isDisplayed()).toBe(true);
	});
});