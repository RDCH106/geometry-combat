import * as gulp from 'gulp'
import * as typescript from 'gulp-tsc'

gulp.task('watch', () => {

    return gulp.watch('src/**/*.ts', [ 'compile' ])
})