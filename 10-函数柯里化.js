//思考？🤔如何实现 multi(2)(3)(4)=24
//简单版本
// function multi(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c
//         }
//     }
// }
//简单版本的可扩展性比较差。如果multi(2)(3)(4)...(n) 咋办？
//解决方案 函数柯里化//
//柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术,最终结果会在接收最后一个参数的时候返回 https://juejin.cn/post/6844903882208837645


//多个参数的一个函数
function multi(a, b, c) {
    return a * b * c
}

let add = (a, b, c, d) => a + b + c + d

//====>经过工具类函数curry（）转换 
function curry(fn) {
    //内部实现 接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数。
    //当接收的参数数量与原函数的形参数量相同时，执行原函数； 
    //当接收的参数数量小于原函数的形参数量时，返回一个函数用于接收剩余的参数，直至接收的参数数量与形参数量一致，执行原函数。
    // if (fn.length <= 1) return fn;  
    const generator = (...args) => {
        if (fn.length === args.length) {
            return fn(...args) //直至接收的参数数量与形参数量一致，执行原函数 //important!!!!
        } else {
            return (...args2) => {
                return generator(...args, ...args2) 
            }
        }
    }
    return generator
}

let _multi = curry(multi)
console.log("curry", _multi(1)(2, 3))
console.log("curry", _multi(1, 2, 3))
console.log("curry", _multi(1)(2)(3))

// let curriedAdd = curry(add)
// console.log(curriedAdd(1)(2)(3)(4))








//=====>>>>函数柯里化典型的应用场景
// Function.prototype.bind = function () {
//     var fn = this;
//     var args = Array.prototye.slice.call(arguments);
//     var context = args.shift();

//     return function () {
//         return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
//     };
// };

// console.log("multi", multi(2)(3)(4))

//...args剩余展开符
// function sum(first, ...args) {
//     console.log(first); // 10
//     console.log(args); // [20, 30] 
// }
// sum(10, 20, 30)



