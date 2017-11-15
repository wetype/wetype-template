const fs = require('fs')

module.exports = function build(content) {

    let vars = []
    content = content.replace(/var\s(.+?)\s=\srequire\("(.+?)"\);/g, (match, $, $1) => {
        vars.push($)
        return vars.length > 1 ? '' : `var $libs = require('./libs');`
    })
    
    vars.forEach(el => {
        content = content.replace(new RegExp(el, 'g'), `$libs`)
    })

    return content
}