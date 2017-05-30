var gulp = require('gulp')
, sourcemaps = require('gulp-sourcemaps')
, sass = require('gulp-sass')
, concat = require('gulp-concat')
, CacheBuster = require('gulp-cachebust')
, print = require('gulp-print')
, babel = require('gulp-babel')
, uglify = require('gulp-uglify')
, annotate = require('gulp-annotate')

var cachebust = new CacheBuster();

gulp.task('build-css', function(){
  return gulp.src(['./public/styles/*.sass', './public/styles/*.css'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
})
gulp.task('build-js', function() {
   return gulp.src('./public/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('views', function() {
    return gulp.src('./public/**/*.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['build-css', 'build-js', 'views']);

gulp.task('watch', function() {
    return gulp.watch(['./public/**/*.html', ['./public/styles/*.sass', './public/styles/*.css'], './public/js/**/*.js'], ['build']);//is this watching the dist folder?
});

gulp.task('default', ['build', 'watch']) // allows us to just type 'gulp' to build everything
