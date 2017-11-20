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
    return content.replace(/([var|const])\s(.+?)\s=\srequire\("(.+?)"\);/g, (match, dec, varName, moduleName) => {
        if (/\.\//.test(moduleName)) {
            return match
        }
        return `${dec} ${varName} = require('./modules/${moduleName}');`
    })
}