const through = require('through2')
const Path = require('path')
const mineType = require('mime-types')
const fs = require('fs')

module.exports = function(options) {

    return through.obj((file, enc, cb) => {
        let { path, contents } = file
        let content = String(contents)
        let res = replaceBackground(content, path)
        file.contents = new Buffer(res)
        cb(null, file)
    })

}

function replaceBackground(file, path) {
    return file.replace(/\s?url\(["']?([\w\;\:\+\,\=\-\/\\\.]+)["']?\)/g, (match, $) => {
        let isImg = /\.png|\.jpg/.test(Path.parse($).ext)
        if (isImg) {
            let dirname = Path.dirname(path)
            let realPath = Path.resolve(dirname, $)
            let data = fs.readFileSync(realPath)
            data = new Buffer(data).toString('base64')
            let base64 = 'data:' + mineType.lookup(realPath) + ';base64,' + data
            return `url("${base64}")`
        }
        return match
    })
}