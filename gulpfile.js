var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var panini      = require('panini');
var browserSync = require('browser-sync').create();

var path = {
	src:{
		sass:  './src/sass/',
		html:  './src/html/'
	},
	docs:{
		html:  './docs',
		css:   './docs/css'
	}
}


gulp.task('sass', function(){
	return gulp.src(path.src.sass + '*.scss')
		.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.docs.css))
    .pipe(browserSync.stream());
});


gulp.task('html', function(){
	return gulp.src( path.src.html + 'pages/*.html' )
		.pipe(panini({
		  root:     path.src.html + 'pages/',
		  layouts:  path.src.html + 'templates/',
		  partials: path.src.html + 'layout/',
		  data:     path.src.html + 'data/',
		  helpers:  path.src.html + 'helpers/'
		}))
		.pipe(gulp.dest(path.docs.html));
});


gulp.task('panini.refresh', function(){
  return panini.refresh();
});

gulp.task('browserSync.reload', function(){
	browserSync.reload();
});

gulp.task('server', ['sass','html'], function() {

    browserSync.init({
	    server: path.docs.html, port: '8080'
    });

    gulp.watch( path.src.sass + "**/*.scss",                 ['sass']                                        );
    gulp.watch( path.src.html + "**/*",                      ['html','panini.refresh','browserSync.reload']  );
    gulp.watch( path.src.html + "data/**/*.{json,yml}",      ['html','panini.refresh','browserSync.reload']  );
});

// Default gulp task to run
gulp.task('default', function(){
	gulp.start('server');
});

