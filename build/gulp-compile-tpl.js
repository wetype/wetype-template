const through = require('through2')
const CompileTpl = require('./compile-tpl')

const compile = new CompileTpl()

module.exports = function(options) {
    return through.obj((file, enc, cb) => {
        let { path, contents } = file
        let content = String(contents)
        let res = compile.render(content)
        file.contents = new Buffer(res)
        cb(null, file)
    })
}
