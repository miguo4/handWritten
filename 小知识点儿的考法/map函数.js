var a = [
    {
        value: 1
    },
    {
        value: 2
    }
]


var c = a.map((item) => { return item.value * 2 }) //不改变原数组
console.log(a, c); //[ { value: 1 }, { value: 2 } ] [ 2, 4 ]
var d = a.map((item) => item.value * 2)
console.log(a, d)//[ { value: 1 }, { value: 2 } ] [ 2, 4 ]



var b = a.map((item) => item.value = item.value * 2) //赋值操作改变了原数组
console.log(a, b);//[ { value: 2 }, { value: 4 } ] [ 2, 4 ]
var c = a.map((item) => { return item.value = item.value * 2 })
console.log(a, c);//[ { value: 4 }, { value: 8 } ] [ 4, 8 ]