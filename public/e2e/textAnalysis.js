'use strict';

var ROOT = "http://localhost:8080";

describe('home page tests', function() {

  it('should display the homepage with links and form input', function(){
    browser.get(ROOT + "/");
    expect(element.all(by.css('waves-effect')).count()).toBe(2);
    expect(element.all(by.tagName('input')).count()).toBe(1);
  });

});