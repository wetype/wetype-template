const gulp = require('gulp')
const ts = require("gulp-typescript")
const tsProject = ts.createProject("tsconfig.json")
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const fs = require('fs')
const less = require('gulp-less')
const nodeResolve = require('rollup-plugin-node-resolve')
const _ = require('lodash')
const flatten = require('gulp-flatten')
const flattenRequires = require('gulp-flatten-requires')
const typescript = require('rollup-plugin-typescript')
const rewriteRequire = require('./build/rewriteRequire')
const rewrite = require('./build/gulp-rewrite')
const writeJson = require('./build/gulp-write-json')
const uglify = require('gulp-uglify')
// const rollup = require('gulp-rollup')
const { rollup } = require('rollup')
const compileTpl = require('./build/gulp-compile-tpl')

gulp.task('ts', () => {
    return tsProject.src()
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

gulp.task('genLib', cb => {
    let {
        dependencies
    } = require('./package.json')
    let fileContent = _.map(dependencies, (v, k) => {
            return `export * from '${k}'`
        }).join('\n') +
        `\nexport * from './src/libs/'` +
        `\nexport * from 'wetype-simple/dist/wetype'`

    fs.writeFile('libs.ts', fileContent, 'utf-8', () => cb())
})

gulp.task('lib', ['genLib'], async() => {
    const bundle = await rollup({
        input: './libs.ts',
        plugins: [
            typescript({
                typescript: require('typescript')
            }),
            nodeResolve({
                module: true
            })
        ]
    });

    await bundle.write({
        file: './dist/libs.js',
        format: 'cjs',
        sourcemap: true
    });

    // return gulp.src('dist/libs.js')
    // .pipe(checkDuplicate())

    // gulp.src('./libs.ts')
    // .pipe(rollup({
    //     input: './libs.ts',
    //     plugins: [
    //         typescript({
    //             typescript: require('typescript')
    //         }),
    //         nodeResolve({
    //             // module: true
    //         })
    //     ]
    // }))
})

gulp.task('clean', () => {
    return gulp.src('dist', {
            read: false
        })
        .pipe(clean())
})

gulp.task('default', ['clean', 'lib', 'ts', 'pug', 'less'])

const tsWatcher = gulp.watch(['src/app.ts', 'src/pages/**/*.ts', 'src/components/**/*.ts'], ['ts'])
const libWatch = gulp.watch('src/libs/**/*.ts', ['lib'])
const pugWatcher = gulp.watch('src/**/*.pug', ['pug'])
const lessWatcher = gulp.watch('src/**/*.less', ['less'])

tsWatcher.on('change', e => {
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...')
})