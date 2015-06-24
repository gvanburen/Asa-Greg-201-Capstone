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
var del = require('del');

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
            assets: [uglify(), 'concat', rev()],
            vendor: [rev()],
            js: [uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }),
                rev()]
        }))
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('copyfonts', function() {
    gulp.src('./public/assets/font/**/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('public/dist/font'));
});

gulp.task('copymaps', function() {
    gulp.src([
            './public/bower_components/angular/angular.min.js.map',
            './public/bower_components/angular-route/angular-route.min.js.map',
        ])
        .pipe(gulp.dest('public/dist/js'));
});

gulp.task('clean:dist', function(cb) {
    del('./public/dist', cb);
});

gulp.task('default', ['images'], function() {
    gulp.watch('./public/assets/css/userStyles.css', ['styles']);
});

gulp.task('clean', ['clean:dist']);

gulp.task('build', ['copy-html-files', 'copyfonts', 'copymaps', 'images', 'usemin']);
