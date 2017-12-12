const fs = require('fs')

let pageName = process.argv.slice(-1)[0]
console.log(pageName)
let pageNameCamel = pageName.replace(/(\w)/, (m, $) => $.toUpperCase())
let pugTpl = ``
let tsTpl = `
import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        navigationBarTitleText: ''
    }
})
class ${pageNameCamel} extends Page {

    onLoad(options: types.OnloadOptions) {

    }

}
`
let lessTpl = ``
fs.mkdirSync(`src/pages/${pageName}`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.ts`, tsTpl, `utf-8`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.pug`, pugTpl, `utf-8`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.less`, lessTpl, `utf-8`)