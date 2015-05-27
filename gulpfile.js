var gulp = require('gulp'),
    plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var sass = require('gulp-sass');


gulp.task('images', function() {
    gulp.src('./public/assets/images/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('public/dist/images/'));
});


gulp.task('styles', function() {
    gulp.src([
            './public/assets/styles/**/*.scss',
            './public/assets/styles/*.scss',
        ])
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('public/dist/styles/'));
});


gulp.task('default', ['images'], function() {
    gulp.watch('./public/assets/styles/**/*.scss', ['styles']);

});
