//防抖 触发完事件 n 秒内不再触发事件，才执行
function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer !== null) clearTimeout(timer)
        timer = setTimeout(fn, delay)
    }
}


//节流
function thorttle(fn, delay) {
    let timer = null
    return function () {
        if (timer) return;
        context = this;
        args = arguments;
        timer = setTimeout(() => {
            clearTimeout(timer) //执行完清空
            fn.apply(context, args)
        }, delay)
    }

}