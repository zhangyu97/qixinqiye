// 轮播图
    let banner = document.querySelector(".banner-center");
    console.log(banner);
    let banimg = document.querySelectorAll(".banner-center .five");
    console.log(banimg);
    let button = document.querySelectorAll(".but");
    console.log(button);
    let t = 0;
    function move() {
        t++;
        if(t == banimg.length){
            t=0;
        }
        banimg.forEach(function (value,index) {
            animate(value, {opacity: 0}, 2000);
            // value.classList.remove("active");
            button[index].classList.remove("active");
        })
        animate(banimg[t], {opacity: 1}, 2000);
        // banimg[t].classList.add("active");
        button[t].classList.add("active");
    }
    let time = setInterval(move, 5000);
    banner.onmouseover = function () {
        clearInterval(time);
    }
    banner.onmouseout = function () {
        time = setInterval(move, 5000);
    }
    button.forEach(function (dom,inn) {
        dom.onclick = function () {
            button.forEach(function (va, i) {
                va.classList.remove("active");
                animate(banimg[i], {opacity: 0}, 2000);
            })
            button[inn].classList.add("active");
            animate(banimg[inn], {opacity: 1}, 2000);
            t = inn;
        }
    })