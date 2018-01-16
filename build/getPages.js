const dirTree = require('directory-tree')
const filteredTree = dirTree('src/pages', { extensions: /\.ts/ })
const _ = require('lodash')
const Path = require('path')

module.exports = function getPages(mainPage, excludePages) {
    let result = []
    function recursive(tree) {
        tree.children.forEach((el, i) => {
            if (el.children[0].type === 'directory') {
                recursive(el)
            } else {
                let name = Path.parse(el.path).name
                let distPath = el.path.replace('src/', '')
                let path = Path.join(distPath, name)
                result.push(path)
            }
        })
    }
    recursive(filteredTree)
    mainPage = mainPage || 'pages/index/index'
    result = result.sort(el => (el === mainPage ? -1 : 1))
    return _.difference(result, excludePages)
}
