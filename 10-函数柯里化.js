//æèï¼ð¤å¦ä½å®ç° multi(2)(3)(4)=24
//ç®åçæ¬
// function multi(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c
//         }
//     }
// }
//ç®åçæ¬çå¯æ©å±æ§æ¯è¾å·®ãå¦æmulti(2)(3)(4)...(n) ååï¼
//è§£å³æ¹æ¡ å½æ°æ¯éå//
//æ¯éåæ¯ä¸ç§å°ä½¿ç¨å¤ä¸ªåæ°çä¸ä¸ªå½æ°è½¬æ¢æä¸ç³»åä½¿ç¨ä¸ä¸ªåæ°çå½æ°çææ¯,æç»ç»æä¼å¨æ¥æ¶æåä¸ä¸ªåæ°çæ¶åè¿å https://juejin.cn/post/6844903882208837645


//å¤ä¸ªåæ°çä¸ä¸ªå½æ°
function multi(a, b, c) {
    return a * b * c
}

let add = (a, b, c, d) => a + b + c + d

//====>ç»è¿å·¥å·ç±»å½æ°curryï¼ï¼è½¬æ¢ 
function curry(fn) {
    //åé¨å®ç° æ¥æ¶ä¸é¨ååæ°ï¼è¿åä¸ä¸ªå½æ°æ¥æ¶å©ä½åæ°ï¼æ¥æ¶è¶³å¤åæ°åï¼æ§è¡åå½æ°ã
    //å½æ¥æ¶çåæ°æ°éä¸åå½æ°çå½¢åæ°éç¸åæ¶ï¼æ§è¡åå½æ°ï¼ 
    //å½æ¥æ¶çåæ°æ°éå°äºåå½æ°çå½¢åæ°éæ¶ï¼è¿åä¸ä¸ªå½æ°ç¨äºæ¥æ¶å©ä½çåæ°ï¼ç´è³æ¥æ¶çåæ°æ°éä¸å½¢åæ°éä¸è´ï¼æ§è¡åå½æ°ã
    // if (fn.length <= 1) return fn;  
    const generator = (...args) => {
        if (fn.length === args.length) {
            return fn(...args) //ç´è³æ¥æ¶çåæ°æ°éä¸å½¢åæ°éä¸è´ï¼æ§è¡åå½æ° //important!!!!
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








//=====>>>>å½æ°æ¯éåå¸åçåºç¨åºæ¯
// Function.prototype.bind = function () {
//     var fn = this;
//     var args = Array.prototye.slice.call(arguments);
//     var context = args.shift();

//     return function () {
//         return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
//     };
// };

// console.log("multi", multi(2)(3)(4))

//...argså©ä½å±å¼ç¬¦
// function sum(first, ...args) {
//     console.log(first); // 10
//     console.log(args); // [20, 30] 
// }
// sum(10, 20, 30)



