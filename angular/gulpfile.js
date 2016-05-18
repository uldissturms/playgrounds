var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var dalek = require('gulp-dalek');
var port = 3000;

gulp.task('test', function () {
    return gulp.src('tests/{unit,acceptance}/*.js', {read: false})
        .pipe(mocha({reporter: 'spec', timeout: 10000}));
});

gulp.task('e2e', function() {
    return gulp.src('tests/end-to-end/*.js')
        .pipe(dalek({
            browser: ['phantomjs'],
            reporter: ['console']
        }));
});

gulp.task('sass', function () {
    gulp.src('bower_components/bootstrap-sass-only/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('demon', ['sass'], function () {
  nodemon({
    script: 'bin/www',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development',
      'PORT': port
    }
  })
    .on('start', ['test'])
    .on('change', ['test'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', ['demon']);
