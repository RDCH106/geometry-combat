import * as gulp from 'gulp'
import * as browserSync from 'browser-sync'

gulp.task('watch', ['bundle'], () => {
    const watcher = gulp.watch('src/**/*.ts', ['refresh'])
    watcher.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

gulp.task('browser-sync', ['watch'], () => {
    return browserSync({
        server: {
            baseDir: 'app'
        }
    })
})

gulp.task('refresh', ['bundle'], browserSync.reload)
gulp.task('dev', ['browser-sync'])