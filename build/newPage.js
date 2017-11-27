const fs = require('fs')

let pageName = process.argv.slice(-1)
let pugTpl = ``
let tsTpl = `
import { Page, wx } from 'wetype-simple'

@Page.decor({
    config: {

    }
})
class ${pageName} extends Page {

}
`
let lessTpl = ``
fs.mkdirSync(`src/pages/${pageName}`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.ts`, tsTpl, `utf-8`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.pug`, pugTpl, `utf-8`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.less`, lessTpl, `utf-8`)