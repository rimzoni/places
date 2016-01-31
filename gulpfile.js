var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

gulp.task('build', function () {
    return browserify({entries: './app/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('web/js'));
});


// gulp.task('less', function() {
//   return gulp.src('./styles/style.less')
//   .pipe(less())
//   .pipe(source('style.css'))
//   .pipe(gulp.dest('web/styles'));
// })


gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);