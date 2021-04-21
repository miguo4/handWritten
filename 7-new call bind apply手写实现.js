//https://juejin.cn/post/6844903814638600205#heading-4

/*
 * new 手写实现
 */
//new new这个关键词，它在Javascript中的主要作用就是执行一个构造函数、然后返回一个实例对像。那么在new 生成实例的这个过程中，发生了什么呢？
// 大致分为四个步骤：
// 创建一个对象；
// 将构造函数的作用域赋给这个新对象(相当于将this 指向新对象);// o.__proto__ = constructor.prototype
// 执行构造函数中的代码(为这个新对象添加属性和方法); //call/apply实现
// 返回这个新对象;
function Person(name) {
    this.name = name;
}

// let p = new Person('gmj')
// console.log(p.name, p instanceof Person);
//版本1
function NewPerson(name) {
    let o = {}
    o.__proto__ = Person.prototype //继承了函数的原型
    Person.call(o, name); //不懂！！！！
    return o
}
let p1 = NewPerson('gmj')
console.log(p1, p1.name, p1 instanceof Person);
//版本1的缺点：构造函数硬编码，参数也硬编码===>优化
//版本2 
function NewPerson2(constructor, name) {
    let o = {}
    o.__proto__ = constructor.prototype
    constructor.call(o, name); //不懂！！！！
    return o
}
let p2 = NewPerson2(Person, 'gmj')
console.log(p2, p2.name, p2 instanceof Person);


//版本3 解决版本2 参数的问题 arguments 表示参数
function NewPerson2(constructor) {
    let o = {}
    o.__proto__ = constructor.prototype
    constructor.call(o, Array.prototype.slice.call(arguments, 1)); //call 参数要放在数组里接受;arguments是伪数组，所以要转换成数组
    return o
}
let p3 = NewPerson2(Person, 'gmj')
console.log(p3, p3.name, p3 instanceof Person);


//
// function new(func) {
// 	lat target = {};
// 	target.__proto__ = func.prototype; //
// 	let res = func.call(target); //执行该函数
// 	if (typeof(res) == "object" || typeof(res) == "function") {
// 		return res;
// 	}
// 	return target;
// }


// function _new(fn, ...args) {
//     if (typeof fn !== 'function') {
//         throw 'fn must be a function';
//     }
//     let obj = new Object(); //[1]创建一个对象
//     obj.__proto__ = Object.create(fn.prototype);
//     let res = fn.apply(obj, [...args]);  

//     let isObject = typeof res === 'object' && res !== null;
//     let isFunction = typeof res === 'function';
//     return isObject || isFunction ? res : obj;
// }; 

/*
 * new 手写实现  the end
 */


/*
* call 手写实现  https://juejin.cn/post/6844903773979033614
*/
let P = {
    name: "default name",
    sayHello: function (parm1) {
        console.log("sayHello to", parm1, this.name)
    }
}

// P.sayHello("parm1");
// P.sayHello.call({ name: "gmj" }, 'parm1')//call直接执行了sayHello（）。apply也是如此；bind不会执行，会默认返回一个方法

//我们要实现的call方法。包含一下逻辑：
//把第一个参数，也就是this传给sayHello
//sayHello执行
Function.prototype.myCall = function (context) {
    context = context || window //不传参数的时候默认是window
    context._fn = this
    let args = [...arguments].slice(1) //除去this,其他的参数都传递给sayHello
    context._fn(...args); //_fn就是sayHello
    delete (context._fn) //删除方法
}
//调用
P.sayHello.myCall({ name: "gmj" }, 'pamas 2')

/*
* call 手写实现  the end
*/

