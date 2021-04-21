var obj1 = {
    a: 100,
    b: 100,
    c: {
        x: 100,
        y: 200
    },
    d: [110, 200]
}
var obj2 = {
    a: 100,
    b: 100,
    c: {
        x: 100,
        y: 200
    },
    d: [110, 200]
}

function isEqual(obj1, obj2) {
    // console.log("isEqual1", obj1, obj2);
    let keys1 = Object.keys(obj1),
        keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false
    for (key in obj1) {
        // console.log("key", key);
        if (!keys2.includes(key)) return false
        if (typeof obj1[key] !== typeof obj2[key]) return false
        if (typeof obj1[key] !== 'object') {
            if (obj1[key] !== obj2[key]) return false
        } else {
            let isFalse = isEqual(obj1[key], obj2[key])
            if (!isFalse) {
                return false
            }
        }
    }
    return true
}

console.log("the result is:", isEqual(obj1, obj2));