const through = require('through2')
const fs = require('fs')

module.exports = function rewrite(options) {

    return through.obj((file, enc, cb) => {
        let { path, contents } = file
        let content = String(contents)
        let compiled = rewriteReq(content)
        file.contents = new Buffer(compiled)
        cb(null, file)
    })

}


function rewriteReq(content) {
    return content.replace(/var\s(.+?)\s=\srequire\("(.+?)"\);/g, (match, varName, moduleName) => {
        if (/\.\//.test(moduleName)) {
            return match
        }
        return `var ${varName} = require('./node_modules/${moduleName}');`
    })
}