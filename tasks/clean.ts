import * as gulp from 'gulp'
import * as del from 'del'
import * as concat from 'lodash.concat'

const includes = [
    'app/assets/**',
    'app/js/**'
]

const excludes = [
    '!app/assets',
    '!app/js'
]

const deleteOpts = concat([], includes, excludes)

gulp.task('clean', () => {
    return del(deleteOpts)
})