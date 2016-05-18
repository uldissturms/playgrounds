exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/protractor/*.js'],
    mochaOpts: {
        reporter: 'spec',
        slow: 3000,
        timeout: 10000
    },
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']    
    }
}   
