let a = [1, [2, [3, 4]]]
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];



/*
 * 可以控制展开多少层
 */
function myflatten(data, deep = 1) {
    const temp = [];//改成闭包
    (function flatten(data, deep) {
        data.map(item => {
            if (deep > 0 && Object.prototype.toString.call(item) === '[object Array]') { // 判断是不是数组：item instanceof Array || Array.isArray(item)  ||
                flatten(item, deep - 1)
            } else {
                temp.push(item)
            }
            return item
        })
    })(data, deep)
    return temp
}

console.log("my flatten", myflatten(arr1, Infinity))

// var arr = [3, [4, 5], [[6, 7]]];
// console.log("使用扩展运算符 ...", [].concat(...arr)); //扩展运算符 ...只展开一层
