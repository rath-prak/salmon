var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('css/sass/**/*.scss')
		.pipe(sass())
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

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('css/sass/**/*.scss', ['sass']);
	// reload browser when HTML or JS file is changed
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});