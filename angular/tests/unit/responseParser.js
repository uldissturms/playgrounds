var responseParser = require('../../responseParser');
var chai = require('chai');
var expect = chai.expect;

describe('response parser', function () {
    it('parse google response html into list of objects', function () {
        var angular = 'AngularJS — Superheroic JavaScript MVW Framework';
        var angularUrl = 'https://angularjs.org';
        var res = responseParser
        .parse('<div><h3 class="r"><a data-href="' + angularUrl +'">' + angular + '</a></h3><h3 class="r"><a data-href="http://somewhere">something</a></h3></div>');
        expect(res.results[0].text).to.equal(angular);
        expect(res.results[0].url).to.equal(angularUrl);
        expect(res.results[1].text).to.equal('something');
        expect(res.results[1].url).to.equal('http://somewhere');
    });
});
