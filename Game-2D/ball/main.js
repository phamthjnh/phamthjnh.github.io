var canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d')

addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

var i=1;
var j=1;

class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }

    /* Bổ xung logic chặn bóng không đi quá tường trái và phải
    */
    move() {
        if (this.x > canvas.width - this.radius -1) {
            this.x = canvas.width - this.radius;
            j=1;
            i=0;
            this.color = "blue";
        }
        if (this.y > canvas.height - this.radius -1) {
            this.y = canvas.height - this.radius - 2;
            j=0;
            i=-1;
            this.color = "black";
        }
        if (this.x + this.dx <= this.radius) {
            this.x = this.radius;
            i=0;
            j=-1;
            this.color = "orange";
        }
        if (this.y + this.dy <= this.radius) {
            this.y = this.radius;
            j=0;
            i=1;
            this.color = "red";
        }
        this.x += this.dx*i;
        this.y += this.dy*j;
        this.draw();
    }

    jump(x, y) {
        c.clearRect(0, 0, canvas.width, canvas.height);
        this.x = this.radius + x;
        this.y = this.radius + y;
        this.draw();
    }
}

//---------
var ball = new Ball(20, 20, 0, 0, 20, 'red');
ball.draw();
var k=0;
addEventListener('keydown', function (event) {
    if (event.keyCode == 32 && k==0) {
        console.log('Start was pressed');
        ball.dx = 8;
        ball.dy = 8;
        k=1;
        console.log(k); 
        console.log(event.keyCode); 
    }  
});  
addEventListener('keyup', function (event) {
    if (event.keyCode == 32 && k==1) {
        console.log('Start was release');
        k=2;
        console.log(k); 
        console.log(event.keyCode); 
    }  
}); 
addEventListener('keydown', function (event) {
    if (event.keyCode == 32 && k==2) {
        console.log('Stop was pressed');
        ball.dx = 0;
        ball.dy = 0;
        k=3;
        console.log(k); 
        console.log(event.keyCode); 
    }  
});   
addEventListener('keyup', function (event) {
    if (event.keyCode == 32 && k==3) {
        console.log('Stop was release');
        k=0;
        console.log(k); 
        console.log(event.keyCode); 
    }  
});  


addEventListener("click", function (event) {
    ball.jump(0, 0);
});

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.move();
}

animate();