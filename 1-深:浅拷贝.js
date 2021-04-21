//https://juejin.cn/post/6844903846779551751#heading-12

var obj1 = {
    a: 100,
    b: 100,
    c: {
        x: 100,
        y: 200
    },
    d: [110, 200]
}

function shallowCopy(obj) {
    //只拷贝对象
    if (typeof obj !== "object") return
    //判断数组/对象
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) { //for in会遍历继承到的对象，因此要用haswo
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}


function deepCopy(obj) {
    if (typeof obj !== 'object') return
    //判断数组/对象
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key] //
        }
    }
    return newObj;
}

//直接传引用
// let operateObj = obj1
// operateObj.a = 'gmj'
// console.log("传引用", obj1, operateObj, obj1 === operateObj)//{ a: 'gmj', b: 100, c: { x: 100, y: 200 }, d: [ 110, 200 ] } { a: 'gmj', b: 100, c: { x: 100, y: 200 }, d: [ 110, 200 ] } true

// let operateObj = shallowCopy(obj1)
let operateObj = deepCopy(obj1)

operateObj.c.x = 'dada' //问题出在这里，第二层会存在传引用的问题
console.log("obj1", obj1)
console.log("operateObj", operateObj)

//console.log("expect to be true, the result is:", isEqual(obj1, obj2));