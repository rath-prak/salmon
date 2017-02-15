const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');;
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

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

gulp.task('es6', () => {
	browserify('./js/main.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./js/dist/'));
});

// gulp.task('cssmin', function () {
//   gulp.src('./css/main.css')
//       .pipe(cssmin())
//       .pipe(rename({suffix: '.min'}))
//       .pipe(gulp.dest('./css'));
// });

gulp.task('watch', ['es6', 'browserSync', 'sass'], function() {
	gulp.watch('./js/main.js',['es6']);
	gulp.watch('./css/sass/**/*.scss', ['sass']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
	gulp.watch('js/dist/*.js', browserSync.reload);
});
