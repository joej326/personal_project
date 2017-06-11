var gulp = require("gulp")
 , sourcemaps = require("gulp-sourcemaps")
 , sass = require("gulp-sass")
 , CacheBuster = require("gulp-cachebust")
 , concat = require("gulp-concat")
 , print = require("gulp-print")
 , babel = require("gulp-babel")
 , uglify = require("gulp-uglify")

 var cachebust = new CacheBuster();

//  var paths = {
//    jsSource: ['./public/js/**/*.js'],
//    sassSource: ['./public/styles/**/*.scss'],
//    indexSource: ['./public/index.html'],
//    viewsSource: ['./public/views/**/*.html'],
//    picturesSource: ['./public/img/**/*']
// };



 gulp.task('build-img', function(){
   return gulp.src('./public/images/**/*')
   .pipe(cachebust.resources())
   .pipe(gulp.dest('./dist/images'));
 });



gulp.task("build-css", function(){
  return gulp.src("./public/styles/*")
          .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(cachebust.resources())
          .pipe(concat("styles.css"))
          .pipe(sourcemaps.write("./maps"))
          .pipe(gulp.dest("./dist/styles"));
});




gulp.task("views", function(){
  return gulp.src("./public/views/*")
  .pipe(gulp.dest("./dist/views"))
});




gulp.task('build-js', function() {
   return gulp.src('./public/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});




gulp.task('build', ['build-css', 'build-js', 'build-img', 'views'], function() {
    return gulp.src('./public/index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./dist'));
});




gulp.task('watch', function() {
    return gulp.watch(['./public/index.html', './public/images/**/*', './public/styles/*.sass', './public/js/**/*.js', './public/views/*'], ['build']);
});

gulp.task('default', ['build', 'watch']) // allows us to just type 'gulp' to build everything
