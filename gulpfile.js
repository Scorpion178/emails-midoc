const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('emailmidoc', () =>
    gulp.src('./src/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
            // outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./src/css'))
);

gulp.task('default', () => {
    gulp.watch('./src/scss/*.scss', ['emailmidoc']);
});