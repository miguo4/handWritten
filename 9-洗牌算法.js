//https://juejin.cn/post/6844903856489365518
var a = [1, 2, 3, 4, 5, 6, 7]
//
function shuffle(arr) {
    let _arr = [];
    while (arr.length) {
        let randomIndex = Math.floor(Math.random() * arr.length)
        _arr.push(arr.splice(randomIndex, 1)[0]) //splice返回删除后的数组，会更改原数组;slice返回副本(c.slice(1,-1)同时删除首尾部)
    }
    return _arr
}

// console.log("shuffle", a);
// console.log("shuffle", shuffle(a));

//原地洗牌 核心思想是：交换位置的一个小用法[a,b]=[b,a]
function shuffle2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = i + Math.floor(Math.random() * (arr.length - i));
        //console.log(11, i, randomIndex, arr);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
        //console.log(22, arr);
    }
    return arr
}

console.log("shuffle2", shuffle2(a));
