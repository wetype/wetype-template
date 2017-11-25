const fs = require('fs')

let pageName = process.argv.slice(-1)
let pugTpl = ``
let tsTpl = `
import { PageDecor, global, PageConstr, wx } from 'wetype-simple'

@PageDecor({
    config: {

    }
})
class ${pageName} extends PageConstr {

}
`
let lessTpl = ``
fs.mkdirSync(`src/pages/${pageName}`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.ts`, tsTpl, `utf-8`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.pug`, pugTpl, `utf-8`)
fs.writeFileSync(`src/pages/${pageName}/${pageName}.less`, lessTpl, `utf-8`)