// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-12-17 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/json3/lib/json3.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/lodash/dist/lodash.compat.js',
      'bower_components/angular-lodash/angular-lodash.js',
      'bower_components/ng-file-upload-shim/angular-file-upload-shim.js',
      'bower_components/ng-file-upload/angular-file-upload.js',
      'bower_components/blueimp-tmpl/js/tmpl.js',
      'bower_components/blueimp-load-image/js/load-image.js',
      'bower_components/blueimp-load-image/js/load-image-ios.js',
      'bower_components/blueimp-load-image/js/load-image-orientation.js',
      'bower_components/blueimp-load-image/js/load-image-meta.js',
      'bower_components/blueimp-load-image/js/load-image-exif.js',
      'bower_components/blueimp-load-image/js/load-image-exif-map.js',
      'bower_components/blueimp-canvas-to-blob/js/canvas-to-blob.js',
      'bower_components/blueimp-file-upload/js/cors/jquery.postmessage-transport.js',
      'bower_components/blueimp-file-upload/js/cors/jquery.xdr-transport.js',
      'bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-process.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-validate.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-image.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-audio.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-video.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-ui.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-jquery-ui.js',
      'bower_components/blueimp-file-upload/js/jquery.fileupload-angular.js',
      'bower_components/blueimp-file-upload/js/jquery.iframe-transport.js',
      'bower_components/cloudinary_js/js/jquery.cloudinary.js',
      'bower_components/cloudinary_ng/js/angular.cloudinary.js',
      'bower_components/jquery-geocomplete/jquery.geocomplete.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-audio/app/angular.audio.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angularjs-dropdown-multiselect/src/angularjs-dropdown-multiselect.js',
      'bower_components/angular-loading-bar/build/loading-bar.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/bootstrap-switch/dist/js/bootstrap-switch.js',
      'bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch.js',
      'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider.js',
      'bower_components/angular-bootstrap-slider/slider.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // // Which plugins to enable
    // plugins: [
    //   'karma-phantomjs-launcher'
    // ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
