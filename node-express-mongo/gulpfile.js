var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var path = require('path');

gulp.task('css-head',function(){
    return gulp.src(
        [
            './public/styles/bootstrap4/bootstrap.min.css',
            './public/plugins/font-awesome-4.7.0/css/font-awesome.min.css',
            './public/plugins/OwlCarousel2-2.2.1/owl.carousel.css',
            './public/plugins/OwlCarousel2-2.2.1/owl.theme.default.css',
            './public/plugins/plugins/OwlCarousel2-2.2.1/animate.css',
            './public/plugins/plugins/colorbox/colorbox.css',
            './public/plugins/styles/main_styles.css',
            './public/plugins/styles/responsive.css'
        ]
    )
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version','safari 5','ie 8','ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/dist/css/'));
});
