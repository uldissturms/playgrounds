'use strict';
module.exports = {
    'results from google search are proxied': function (test) {
        test
            .open('http://localhost:3000')
            .assert.title('angular barebones')
            .type('#q', 'angularjs')
            .click('#search')
            .waitForElement('.result:firt-child')
            .assert.text('.result:first-child').to.contain('AngularJS — Superheroic JavaScript MVW Framework', 'angularjs official page is displayed as a result')
            .screenshot('results.png')
            .click('.result:first-child a')
            .assert.url('https://angularjs.org/', 'AngularJs home page is displayed')
            .screenshot('angularjs.png')
            .done();
    }
};
