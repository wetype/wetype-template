const through = require('through2')
const rewriteReq = require('./rewriteRequire')

function rewrite(options) {

    return through.obj((file, enc, cb) => {
        let { path, contents } = file
        let content = String(contents)
        let compiled = rewriteReq(content)
        file.contents = new Buffer(compiled)
        cb(null, file)
    })

}

module.exports = rewrite