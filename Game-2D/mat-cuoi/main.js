var canvas = document.querySelector('#canvas')
canvas.width = 600
canvas.height = 600
canvas.style.border = '2px solid red'
var ctx = canvas.getContext('2d')

class Circle {
    constructor(dx,dy,dr,radian,color) {
        this.dx=dx
        this.dy=dy
        this.dr=dr
        this.color=color
        this.radian=radian
    }
    draw() {
        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.arc(this.dx,this.dy,this.dr,0,this.radian,false)
        ctx.stroke()
    }
}

var circle1 = new Circle(300,300,150,2*Math.PI,"blue");
circle1.draw()
var circle2 = new Circle(300,300,110,Math.PI,"blue");
circle2.draw()
var circle3 = new Circle(250,250,10,2*Math.PI,"blue");
circle3.draw()
var circle4 = new Circle(350,250,10,2*Math.PI,"blue");
circle4.draw()