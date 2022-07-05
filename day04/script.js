const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    // toggle('active'),如果 active 类值已存在，则移除它，否则添加它
    search.classList.toggle('active')
        //获取焦点
        // 将焦点设置在指定元素上，如果它可以被聚焦的话。焦点元素是默认接收键盘和类似事件的元素。
    input.focus()
})