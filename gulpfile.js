/**
 * Created by 140315 on 2017/9/26.
 */
var gulp=require('gulp'),
    less=require('gulp-less'),
    concat=require('gulp-concat'),
    cssmin=require('gulp-cssmin'),
    rename=require('gulp-rename'),
    resource=require('gulp-sourcemaps');

//创建任务
gulp.task('less',function(){
  return gulp.src('./src/less/**/*.less')
       .pipe(resource.init())
       .pipe(less())
       .pipe(concat('all.css'))
       .pipe(gulp.dest('./src/css'))
       .pipe(cssmin())
       .pipe(rename('main.css'))
       .pipe(resource.write())
       .pipe(gulp.dest('./bulid/css'))
});
gulp.task('lesswatch',function () {
    gulp.watch('./src/less/**/*.less', ['less']);
})
gulp.task('default',['lesswatch']);