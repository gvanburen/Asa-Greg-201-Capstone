// Karma configuration
// Generated on Sun Jun 07 2015 10:51:55 GMT-0700 (MST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [

            'https://code.jquery.com/jquery-2.1.1.min.js',
            './public/bower_components/angular/angular.js',
            './public/bower_components/angular-mocks/angular-mocks.js',
            './public/bower_components/angular-animate/angular-animate.min.js',
            './public/bower_components/angular-route/angular-route.min.js',
            './public/assets/js/d3.js',
            './public/assets/js/d3.config.js',
            './public/app.config.js',
            './public/app.config.Spec.js',
            './public/services/*.js',
            './public/services/*.Spec.js',
            './public/components/**/*.js',
            './public/components/**/*.Spec.js',
            './public/components/**/*.html'
        ],


        // list of files to exclude
        exclude: [
            './public/bower_components/**/index.js',
            './public/bower_components/angular-mocks/ngAnimateMock.js',
            './public/bower_components/angular-mocks/ngMock.js',
            './public/bower_components/angular-mocks/ngAnimateMock.js',
            './public/bower_components/angular-mocks/ngMockE2E.js',
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'public/**/*.html': 'ng-html2js'
        },

        ngHtml2JsPreprocessor: {
            // strip app from the file path
            stripPrefix: 'public/'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
