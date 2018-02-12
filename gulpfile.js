// path
// 파일 경로 진짜 확인 또 확인 할것. path 하나로 function이 작동안됨.
var dist = './travel-site/gulp';
var path = {
    gulp : dist + '/tasks'
};

require(path.gulp+'/styles');
require(path.gulp+'/watch');


