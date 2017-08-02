import * as gulp from 'gulp'
import * as browserify from 'browserify'
import * as source from 'vinyl-source-buffer'
import * as del from 'del'

const bundler = browserify({
    debug: true,
    standalone: 'game.min.js'
})

gulp.task('bundle', () => {
    return bundler.add('app/js/game.js').bundle()
        .pipe(source('game.min.js'))
        .pipe(gulp.dest('app/js'))
})

gulp.task('clean', () => {
    return del([
                'app/js/*.js',
                '!app/js/*.min.js'
            ])
})
