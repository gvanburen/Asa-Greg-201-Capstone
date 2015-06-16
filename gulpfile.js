var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');


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
            html: [minifyHtml({empty: true})],
            vendor: [uglify(), rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('public/dist/'));
});


//gulp.task('index', function() {
//    var target = gulp.src('./public/index.html');
//    var vendorStream = gulp.src([], {
//        read: false
//    });
//    var configStream = gulp.src([], {
//        read: false
//    });
//    var componentStream = gulp.src([], {
//        read: false
//    });
//    var assetStream = gulp.src([], {
//        read: false
//    });
//});

gulp.task('styles', function() {
    gulp.src('./public/assets/css/userStyles.css')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/dist/styles/'));
});


gulp.task('default', ['images'], function() {
    gulp.watch('./public/assets/css/userStyles.css', ['styles']);
});

gulp.task('build', ['images', 'usemin']);
