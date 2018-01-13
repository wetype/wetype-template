const dirTree = require('directory-tree')
const filteredTree = dirTree('src/pages', {extensions:/\.ts/})
const _ = require('lodash')

module.exports = function getPages(mainPage, excludePages) {
    let result = []
    function recursive(tree) {
        tree.children.forEach((el, i) => {
            if (el.children[0].type === 'directory') {
                recursive(el)
            } else {
                result.push(el.path.replace('src/pages/', ''))
            }
        })
    }
    recursive(filteredTree)
    mainPage = mainPage || 'index'
    result = result.sort(el => el === mainPage ? -1 : 1)
    return _.difference(result, excludePages)
}
