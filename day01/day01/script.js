//返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)返回的对象是 NodeList
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    //绑定事件，点击
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}