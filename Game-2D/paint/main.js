const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
let x,y
let color = 'black';
let size = 2;
let isDraw = false;

let btnColors = document.querySelectorAll(".color_btn")
let btnSizes = document.querySelectorAll(".size_btn")
let btnReset = document.querySelector(".btn_reset")
let btnEraser = document.querySelector(".btn_eraser")


const removeClass = (arr, className) => {
    arr.map(ele => ele.classList.remove(className))
}

btnColors.forEach(function(btn){
    btn.addEventListener('click',function(){
        removeClass(Array.from(btnColors),'color_btn_active')
        this.classList.add('color_btn_active')
        let colorValue = this.getAttribute('color')
        color = colorValue
    })
}) 

btnSizes.forEach(function(btn){
    btn.addEventListener('click',function(){
        removeClass(Array.from(btnSizes),'size_btn_active')
        this.classList.add('size_btn_active')
        let sizeValue = this.getAttribute('size')
        size = Number(sizeValue)
    })
}) 
btnReset.addEventListener('click',function(){
    c.clearRect(0,0,canvas.width,canvas.height)
})
btnEraser.addEventListener('click',function(){
    color = 'white';
    size = 50;
})
canvas.onmousedown = (event) => {
    isDraw = true;
    document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
    x = event.offsetX;
    y = event.offsetY;

    c.strokeStyle = color;
    c.lineWidth = size;
}

canvas.onmousemove = (event) => {
    if (isDraw) {
        c.beginPath();
        c.moveTo(x,y);
        c.lineCap = 'round';
        c.lineTo(event.offsetX,event.offsetY)
        c.stroke();
    
        x = event.offsetX;
        y = event.offsetY;
    } 
}
canvas.onmouseup = () => {
    isDraw = false;
    document.getElementsByTagName("body")[0].style.cursor = "default";
}