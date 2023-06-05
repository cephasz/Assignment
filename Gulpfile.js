const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano');
const sass = require('gulp-sass');

sass.compiler = require('dart-sass');

function sassTask() {
  return gulp
    .src('./sass/styles.scss')
    .pipe(sass())
    .pipe(concatCss('styles.css'))
    .pipe(gulp.dest('./css'));
}

function minifyTask() {
  return gulp.src('./css/styles.css').pipe(cssNano()).pipe(gulp.dest('./css'));
}

function watchTask() {
  gulp.watch('./sass/*.scss', gulp.series(sassTask, minifyTask));
}

exports.watchTask = watchTask;