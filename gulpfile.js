const gulp = require('gulp')
const ts = require("gulp-typescript")
const tsProject = ts.createProject("tsconfig.json")
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

gulp.task('ts', () => {
    return tsProject.src()
        .pipe(cache('ts'))
        .pipe(tsProject())
        .js
        .pipe(flatten())
        .pipe(flattenRequires())
        .pipe(rewrite())
        .pipe(writeJson())
        .pipe(gulp.dest('dist'))
})

gulp.task('pug', () => {
    gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(rename({
            extname: '.wxml'
        }))
        .pipe(flatten())
        .pipe(compileTpl())
        .pipe(gulp.dest('dist'))
})

gulp.task('less', cb => {
    return gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(flatten())
        .pipe(rename({
            extname: '.wxss'
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', () => {
    return gulp.src('dist', {
            read: false
        })
        .pipe(clean())
})

gulp.task('copy', () => {
    let { dependencies } = require('./package.json')
    let modules = _.map(dependencies, (version, name) => name)
    let pkgJsons = modules.map(el => `./node_modules/${el}/package.json`)
    gulp.src(pkgJsons)
    .pipe(copyModules())
    .pipe(flatten())
    .pipe(gulp.dest('./dist/modules'))

})

gulp.task('page', () => {
    let { argv } = process
    let pageName = argv.slice(-1)
    let pugTpl = ``
    let tsTpl = `
    import { PageDecor, global, PageConstr, wx } from 'wetype-simple'

    @PageDecor({
        config: {

        }
    })
    class ${pageName} extends PageConstr {

    }
    `
    let lessTpl = ``
    fs.mkdirSync(`src/pages/${pageName}`)
    fs.writeFileSync(`src/pages/${pageName}/${pageName}.ts`, tsTpl, `utf-8`)
    fs.writeFileSync(`src/pages/${pageName}/${pageName}.pug`, pugTpl, `utf-8`)
    fs.writeFileSync(`src/pages/${pageName}/${pageName}.less`, lessTpl, `utf-8`)
})

gulp.task('default', ['ts', 'pug', 'less', 'copy'])

const tsWatcher = gulp.watch('src/**/*.ts', ['ts'])
const pugWatcher = gulp.watch('src/**/*.pug', ['pug'])
const lessWatcher = gulp.watch('src/**/*.less', ['less'])

tsWatcher.on('change', e => {
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...')
})