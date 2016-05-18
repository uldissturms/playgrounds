var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('search', function() {
    it('should return results', function(done) {
        browser.get('http://localhost:3000');

        element(by.model('query')).sendKeys('angularjs');
        element(by.id('search')).click();

        var results = element.all(by.repeater('result in results'));

        expect(results.first().getText()).to.eventually.equal('AngularJS — Superheroic JavaScript MVW Framework').notify(done);
    });
});

