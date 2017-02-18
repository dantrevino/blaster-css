'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('sass', function () {
  return gulp.src(['./blaster.sass'])
    .pipe(sass({
      includePaths: ['./sass', 'node_modules/bulma'],
      errLogToConsole: true
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('clean', function() {
  return del('css');  
});

gulp.task('default', [ 'sass' ]);

