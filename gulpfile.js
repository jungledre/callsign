var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var react = require("gulp-react");

gulp.task('browserify', function() {
  browserify('./assets/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('copy',function() {
  gulp.src(['./assets/**/*.*', '!./assets/js/**/*.*'])
  .pipe(gulp.dest('./public'));
});

gulp.task('build', ['browserify', 'copy']);

gulp.task('watch', function(){
  gulp.watch('./assets/**/*.*', ['build']);
})

gulp.task('default', ['build', 'watch'])

gulp.task('lint', function() {
  return gulp.src('./assets/**/*.js')
    .pipe(react())
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
