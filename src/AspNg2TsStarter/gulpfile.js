﻿/// <binding AfterBuild='default' />

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('moveModulesToLibs', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js'
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});

gulp.task('compileStyles', function () {
    gulp.src([
        'styles/*.scss'
    ]).pipe(sass())
         .pipe(gulp.dest('./wwwroot/app/styles'));
});

gulp.task('moveComponents', function () {
    gulp.src([
        'scripts/*/*.*', '!scripts/*.ts', '!scripts/*/*.ts'
    ]).pipe(gulp.dest('./wwwroot/app/'));
});

gulp.task('default', ['moveModulesToLibs', 'compileStyles', 'moveComponents']);

// TODO: Gulp clean