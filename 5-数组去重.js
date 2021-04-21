//
var a = [1, 1, 3, 4, 5, 6, 7, 5, 6, 0]

//Se去重+ Array.from转数组
function removeDuplicate1(oldArray) {
    //return Array.from(new Set(oldArray))
    return [...new Set(oldArray)]
}

//新建一个数组,includes 判断数组是否存在；不存在就push
function removeDuplicate2(oldArray) {
    let myStack = []
    for (num of oldArray) {
        if (myStack.includes(num)) {

        } else {
            myStack.push(num)
        }
    }
    return myStack
}


console.log("removeDuplicate", removeDuplicate1(a))
// console.log("removeDuplicate2", removeDuplicate2(a))