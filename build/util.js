const Path = require('path')

module.exports.first = function(obj) {
    for (let p in obj) {
        return obj[p]
    }
}

module.exports.alphabet = function(str) {
    str = str + ''
    let map = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        e: 6
    }
    let aa = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
    ]
    if (/\d/.test(str)) {
        return aa[str].toLowerCase()
    } else {
        return map[str]
    }
}

module.exports.resoleRelativePath = function(path) {
    if (path[0] === '@') {
        return path.replace('@', `${process.cwd()}${Path.sep}src`)
    }
    return path
}

module.exports.correctSep = function(path) {
    if (/\\/.test(path)) {
        return path.replace(/\\/g, '/')
    }
    return path
}
