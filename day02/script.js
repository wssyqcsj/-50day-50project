const line = document.getElementById('lines');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
//定义一个常量来来控制判断是否要用disabled
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) { //经过测试，这个判断语句没有也能按照要求运行
        currentActive = circles.length //个人判断，不能进行点击事件后，currentActive不会增加所以不会影响
    }
    update();

})

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            //如果没有到达最后一点，就给每一个点添加active来控制按钮的颜色
            circle.classList.add('active')
        } else {
            //点击了prev，这个时候index就等于currentActive，这时候就让按钮的颜色变灰
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active');
    //蓝色长条的长度控制。点击next宽度就加总长度的33%
    line.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}