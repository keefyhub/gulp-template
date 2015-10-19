// Include gulp
var gulp = require('gulp');
 // Include plugins
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var assets = "./build/"

// Gulp Test
gulp.task('test', function () {
    console.log('Gulp is working!');
});

// Clear Cache
gulp.task('clear', function (done) {
    return cache.clearAll(done);
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
      //.pipe(concat('scripts.js')) add this back in if you want concatinated js files
        .pipe(uglify())
        .pipe(gulp.dest(assets +'js'));
});

// Sass & Autoprefix
gulp.task('sass', function() {
  gulp.src('./scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(assets +'css'));
});

// Images 
 gulp.task('images', function() {
  gulp.src('./images/**/*')
   .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
   .pipe(gulp.dest(assets +'images'));
});

// Watch
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('./js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('./scss/style.scss', ['sass']);
   // Watch image files
  gulp.watch('./images/**/*', ['images']);
});

// Default Task
gulp.task('default', ['scripts', 'sass', 'images', 'watch']);