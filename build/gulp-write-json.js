const through = require('through2')
const util = require('./util')
const fs = require('fs')
const Path = require('path')
const _ = require('lodash')

module.exports = function() {
    return through.obj((file, enc, cb) => {
        let { path, contents } = file
        let content = String(contents)
        let matched = content.match(/[App|Page|Component]\.decor\(\{([\s\S\w\W]+?)\}\)/i)
        let isComponent = /Component\.decor/.test(content)
        let isPage = /Page\.decor/.test(content)
        let isApp = /App\.decor/.test(content)
        let hasConfig = isApp || isComponent || isPage
        if (hasConfig && matched) {
            // 去掉behaviors
            let m = rmBehaviorArr(matched[1])
            eval('var json = {' + m + '}')
            let config = json.config || {}
            // 若是组件，则自动添加组件配置
            if (isComponent) {
                config.component = true
            }
            if (isPage) {
                Object.keys(config.usingComponents || {}).forEach(name => {
                    let v = config.usingComponents[name]
                    config.usingComponents[name] = `./${v}.com`
                })
            }
            let name = Path.parse(path).name
            return fs.writeFile(
                `dist/${name}.json`, 
                JSON.stringify(config),
                'utf-8',
                (err) => cb(err, file)
            )
        }
        cb(null, file)
    })
}

function rmBehaviorArr(str) {
    return str.replace(/behaviors:\s?\[.+?\]/, '')
}

function getConfig(str) {
    str.match(/config:\s?\{\}/)
}