var canvas = document.querySelector('#canvas')
canvas.width = 600
canvas.height = 600
canvas.style.border = '2px solid red'
var ctx = canvas.getContext('2d')

// Mô hình hóa hình chữ nhật
class Rect {
    constructor(dx,dy,width,height,color) {
        this.dx=dx
        this.dy=dy
        this.width=width
        this.height=height
        this.color=color
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.dx,this.dy,this.width,this.height)
        ctx.fill()
    }
}
var rect = new Rect(0,0,200,100,'red')
rect.draw()
var rect1 = new Rect(200,220,100,150,'blue')
rect1.draw()
var rect2 = new Rect(350,220,250,100,'yellow')
rect2.draw()
var rect3 = new Rect(400,500,200,50,'green')
rect3.draw()

