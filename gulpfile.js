const gulp = require('gulp')
const { dependencies } = require('./package.json')

let modules = Object.keys(dependencies)
let pkgJsons = modules.map(el => `./node_modules/${el}/package.json`)

require('wetype-util').gulpfile(gulp, pkgJsons)
