var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');

gulp.task('copy-html-files', function() {
    gulp.src(['./public/**/*.html', '!./public/index.html'], {
            base: './public'
        })
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('images', function() {
    gulp.src('./public/assets/images/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('public/dist/images/'));
});

gulp.task('usemin', function() {
    gulp.src('./public/index.html')
        .pipe(usemin({
            html: [minifyHtml({
                empty: true
            })],
            css: [autoprefixer('last 2 versions'), minifyCss(), 'concat', rev()],
            vendorCss: [rev()],
            vendor: [uglify(), rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('public/dist/'));
});


gulp.task('default', ['images'], function() {
    gulp.watch('./public/assets/css/userStyles.css', ['styles']);
});

gulp.task('build', ['copy-html-files', 'images', 'usemin']);
