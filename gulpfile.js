// var gulp = require('gulp');
// var browserify = require('browserify');
// var source = require('vinyl-source-stream');
// var gutil = require('gulp-util');
// var babelify = require('babelify');
// var less = require('gulp-less');
// // var package = require('package.json');

// // External dependencies you do not want to rebundle while developing,
// // but include in your application deployment
// var dependencies = [
// 	'react'
// ];
// // keep a count of the times a task refires
// var scriptsCount = 0;

// // Gulp tasks
// // ----------------------------------------------------------------------------
// gulp.task('scripts', function () {
//     bundleApp(false);
// });

// gulp.task('deploy', function (){
// 	bundleApp(true);
// });

// gulp.task('watch', function () {
// 	gulp.watch(['./app/components/*.js'], ['scripts']);
// });
// // gulp.task('watch', ['build'], function () {
// //     gulp.watch('*.jsx', ['build']);
// // });

// // When running 'gulp' on the terminal this task will fire.
// // It will start watching for changes in every .js file.
// // If there's a change, the task 'scripts' defined above will fire.
// gulp.task('default', ['scripts','watch']);

/**
 * Less compilation
 */
// gulp.task('less', function() {
//   return gulp.src(package.paths.less)
//   .pipe(less())
//   .pipe(concat(package.dest.style))
//   .pipe(gulp.dest(package.dest.dist));
// })
// gulp.task('less:min', function() {
//   return gulp.src(package.paths.less)
//   .pipe(less())
//   .pipe(concat(package.dest.style))
//   .pipe(cssmin())
//   .pipe(gulp.dest(package.dest.dist));
// })

// // Private Functions
// // ----------------------------------------------------------------------------
// function bundleApp(isProduction) {
// 	scriptsCount++;
// 	// Browserify will bundle all our js files together in to one and will let
// 	// us use modules in the front end.
// 	var appBundler = browserify({
//     	entries: './app/app.jsx',
//     	debug: true
//   	})

// 	// If it's not for production, a separate vendors.js file will be created
// 	// the first time gulp is run so that we don't have to rebundle things like
// 	// react everytime there's a change in the js file
//   	if (!isProduction && scriptsCount === 1){
//   		// create vendors.js for dev environment.
//   		browserify({
// 			require: dependencies,
// 			debug: true
// 		})
// 			.bundle()
// 			.on('error', gutil.log)
// 			.pipe(source('vendors.js'))
// 			.pipe(gulp.dest('./web/js/'));
//   	}
//   	if (!isProduction){
//   		// make the dependencies external so they dont get bundled by the 
// 		// app bundler. Dependencies are already bundled in vendor.js for
// 		// development environments.
//   		dependencies.forEach(function(dep){
//   			appBundler.external(dep);
//   		})
//   	}

//   	appBundler
//   		// transform ES6 and JSX to ES5 with babelify
// 	  	.transform(babelify,{presets: ["es2015", "react"]})
// 	    .bundle()
// 	    .on('error',gutil.log)
// 	    .pipe(source('bundle.js'))
// 	    .pipe(gulp.dest('./web/js/'));
// }

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