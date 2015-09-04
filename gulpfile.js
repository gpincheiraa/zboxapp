'use strict';

var gulp  = require('gulp'),
  inject  = require('gulp-inject'),
  bowerFiles = require('main-bower-files'),
  jshint  = require('gulp-jshint'),
  minify  = require('gulp-minify-css'),
  uglify  = require('gulp-uglify'),
  protractor = require("gulp-protractor").protractor,

  defaultTasks =[
    'inject',
    'watch',
    //'test'
  ]; 

// Task for inject css and js files created for us and bower front-end libraries installed.
gulp.task('inject', function () {

  var target = gulp.src('client/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['client/**/*.js', 
                          '!client/bower_components{,/**}',
                          'client/css/**/*.css',
                          'client/css/**/*.eot',
                          'client/css/**/*.svg',
                          'client/css/**/*.ttf',
                          'client/css/**/*.woff'],{read: false});

  return target
    .pipe(inject(sources, {addRootSlash: false, ignorePath: "/client"}))
    .pipe(inject(
      gulp.src(
        bowerFiles(),
        {read: false}
      ),
      {name: 'bower', addRootSlash: false, ignorePath: "/client"}
    ))
    .pipe(gulp.dest('client'));
});


//watch the changes on directories where we create files.
gulp.task('watch', function() {
  gulp.watch(['client/**/*.js','client/css/**/*.css'],['inject']);
});



//Testing
gulp.task('test', function() {
  gulp.src(["./tests/*.js"])
    .pipe(protractor({
        configFile: "./protractor.conf.js",
        args: ['--baseUrl', 'http://localhost:3000']
    }))
    .on('error', function(e) { throw e })
});

//Default task called from the command 'gulp'
gulp.task('default', defaultTasks);
