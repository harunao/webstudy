var gulp = require('gulp');
var watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// path
// 파일 경로 진짜 확인 또 확인 할것. path 하나로 function이 작동안됨.
var src = './travel-site/app';
var path = {
    asset : src + '/assets/styles',
    temp : src + '/temp/styles',
};

gulp.task('watch', function(){
    browserSync.init({
        //notify: false,
        server: {
            baseDir: src
        }
    });

    watch(src+'/index.html', function(){
        browserSync.reload();
    });

    watch(path.asset+'/**/*.css', function(){
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src(path.temp+'/main.css')
    .pipe(browserSync.stream());
});