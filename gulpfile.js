const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const less = require('gulp-less')
const nodeResolve = require('rollup-plugin-node-resolve')
const _ = require('lodash')
const flatten = require('gulp-flatten')
const flattenRequires = require('gulp-flatten-requires')
const typescript = require('rollup-plugin-typescript')
const rewrite = require('./build/gulp-rewrite')
const writeJson = require('./build/gulp-write-json')
const uglify = require('gulp-uglify')
const compileTpl = require('./build/gulp-compile-tpl')
const copyModules = require('./build/gulp-copy-modules')
const cache = require('gulp-cached')
const fs = require('fs')
const imagemin = require('gulp-imagemin')
const modifyWxml = require('./build/gulp-modify-wxml')
const modifyWxss = require('./build/gulp-modify-wxss')
const plumber = require('gulp-plumber')
const prettier = require('prettier')

gulp.task('ts', () => {
    return tsProject
        .src()
        .pipe(plumber())
        .pipe(cache('ts'))
        .pipe(tsProject())
        .js.pipe(rewrite())
        .pipe(writeJson())
        .pipe(gulp.dest('dist'))
})

gulp.task('pug', () => {
    gulp
        .src('src/**/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(
            rename({
                extname: '.wxml'
            })
        )
        .pipe(modifyWxml())
        .pipe(compileTpl())
        .pipe(gulp.dest('dist'))
})

gulp.task('less', cb => {
    return gulp
        .src('src/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(
            rename({
                extname: '.wxss'
            })
        )
        .pipe(modifyWxss())
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', () => {
    return gulp
        .src('dist', {
            read: false
        })
        .pipe(clean())
})

gulp.task('copy', () => {
    let { dependencies } = require('./package.json')
    let modules = _.map(dependencies, (version, name) => name)
    let pkgJsons = modules.map(el => `./node_modules/${el}/package.json`)
    gulp
        .src(pkgJsons)
        .pipe(copyModules())
        .pipe(flatten())
        .pipe(gulp.dest('./dist/modules'))
})

gulp.task('img', () => {
    gulp
        .src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})

gulp.task('uglify', () => {
    gulp
        .src('dist/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

gulp.task('w', () => {
    const tsWatcher = gulp.watch('src/**/*.ts', ['ts'])
    const pugWatcher = gulp.watch('src/**/*.pug', ['pug'])
    const lessWatcher = gulp.watch('src/**/*.less', ['less'])
    const imgWatcher = gulp.watch('src/img/*', ['img'])

    tsWatcher.on('change', e => {
        console.log('File ' + e.path + ' was ' + e.type + ', running tasks...')
    })
})

gulp.task('default', ['ts', 'pug', 'less', 'copy', 'img', 'w'])
