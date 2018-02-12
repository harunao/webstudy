var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');

// path
// 파일 경로 진짜 확인 또 확인 할것. path 하나로 function이 작동안됨.
var src = './travel-site/app';
var path = {
    asset : src + '/assets/styles',
    temp : src + '/temp/styles',
};

gulp.task('styles', function(){
    var processors = [cssimport, mixins, nested, cssvars, autoprefixer];

    return gulp.src(path.asset+'/main.css')
        .pipe(postcss(processors))
        .on('error',function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(path.temp));
}); 