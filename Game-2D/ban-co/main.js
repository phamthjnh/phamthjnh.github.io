var canvas = document.querySelector('#canvas')
canvas.width = 660
canvas.height = 660
canvas.style.border = '2px solid black'
var ctx = canvas.getContext('2d')
ctx.fillStyle = '#e6ccad';
ctx.fillRect(0, 0, canvas.width, canvas.height);

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
for (var j=0; j<=7 ; j+=2) {
    for (var i=1; i<=8 ; i+=2) {
        var rect = new Rect(i*70+50,j*70+50,70,70,'#9c5621')
        rect.draw()
        var rect = new Rect((i-1)*70+50,(j+1)*70+50,70,70,'#9c5621')
        rect.draw()
    }
}

ctx.beginPath()
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.rect(50, 50, 560, 560);
ctx.stroke();
