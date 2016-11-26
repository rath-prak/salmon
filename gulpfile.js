var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function() {
	return gulp.src('css/sass/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
	});
});

gulp.task('browserify', function() {
	return gulp.src(['./js/main.js'])
	.pipe(browserify())
	.pipe(uglify())
	.pipe(gulp.dest('./js/dist'))
});

gulp.task('cssmin', function () {
  gulp.src('./css/main.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['browserSync', 'sass', 'browserify', 'cssmin'], function() {
	gulp.watch('css/sass/**/*.scss', ['sass']);
	// reload browser when HTML or JS file is changed
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
	gulp.watch('js/dist/*.js', browserSync.reload);
});


 

