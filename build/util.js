module.exports.first = function(obj) {
    for (let p in obj) {
        return obj[p]
    }
}