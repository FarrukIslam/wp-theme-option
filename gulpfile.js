var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	cleancss = require('gulp-clean-css'),
	util = require('gulp-util'),
	log = util.log,
	browserSync = require('browser-sync').create(),
	childtheme = 'web/app/themes/option-theme/'

gulp.task('sass', function() {
	log( 'Generate CSS files ' + ( new Date()).toString() );
	gulp.src( childtheme + 'assets/styles/*.scss' )
		.pipe( sass() )
		.pipe( cleancss() )
		.pipe( gulp.dest( childtheme + 'dist/css' ) );
} );

gulp.task('js', function() {
	log( 'Uglify JS files ' + ( new Date()).toString() );
	gulp.src( childtheme + 'assets/js/*.js' )
		.pipe( uglify() )
		.pipe( gulp.dest( childtheme + 'dist/js' ) );
} );

gulp.task('watch', function() {
	gulp.watch( childtheme + 'assets/styles/**/*.scss', ['sass'] );
	gulp.watch( childtheme + 'assets/js/**/*.js', ['js'] );
});
