import * as gulp from 'gulp'
import * as typescript from 'gulp-tsc'

gulp.task('compile', () => {

    gulp.src(['src/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('app'))
})