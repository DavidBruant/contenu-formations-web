var gulp = require('gulp');
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

gulp.task('es6', function() {
  browserify({entries: './assets/js/app.js', extensions: ['.js'], debug: true})
      .transform(babelify, { presets: ['es2015'] })
      .bundle()
      .on('error',gutil.log)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./assets/js/'));
});

gulp.task('watch',function() {
  gulp.watch(['./assets/js/**/*.js'],['es6'])
});

gulp.task('default', ['es6','watch']);