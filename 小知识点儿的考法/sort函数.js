var a = [2, 1, 10],
    b = a.sort(); //sort函数的返回值是对数组的引用，在原数组上进行排序，不生成副本 a===b true

console.log(b.push(3)) //4
console.log(a) //[ 1, 10, 2, 3 ]
console.log(b)//[ 1, 10, 2, 3 ]  
console.log(a === b) //true
