import * as gulp from 'gulp'
import * as server from 'gulp-server-livereload'

gulp.task('dev', ['watch'], () => {
    
    gulp.src('app')
        .pipe(server({
            livereload: true
        }))
})