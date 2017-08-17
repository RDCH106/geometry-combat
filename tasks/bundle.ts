import * as gulp from 'gulp'
import * as plumber from 'gulp-plumber'
import * as browserify from 'browserify'
import * as source from 'vinyl-source-stream'
import * as assign from 'lodash.assign'
import * as watchify from 'watchify'
import * as buffer from 'vinyl-buffer'
import * as tsify from 'tsify'

const bundlerOpts = {
    debug: true,
    entries: ['src/main.ts'],
    plugin: [
        [tsify, { noImplicitAny: true, include: 'src/**/*.ts' }]
    ]
}

const opts = assign({}, watchify.arguments, bundlerOpts)
const bundler = watchify(browserify(opts))

const libs = [
    'lib/phaser-ce/build/phaser.min.js',
    'lib/phaser-ce/build/phaser.map'
]

gulp.task('libs', ['clean'], () => {
    return gulp.src(libs)
        .pipe(plumber())
        .pipe(gulp.dest('app/js'))
})

gulp.task('bundle', ['libs'], () => {
    return bundler.bundle()
        .pipe(plumber())
        .pipe(source('game.min.js'))
        .pipe(buffer())
        .pipe(gulp.dest('app/js'))
})
