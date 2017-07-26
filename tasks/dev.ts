import * as gulp from 'gulp'
import * as server from 'gulp-server-livereload'

gulp.task('dev', ['compile', 'watch'], () => {
    
    gulp.src('app')
        .pipe(server({
            livereload: true
        }))
})