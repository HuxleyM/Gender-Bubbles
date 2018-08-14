//color for circles
//global variables for circle


var colorArray = [
    '#ffaa33',
    '#99ffaa',
    '#00ff00',
    '#4411aa',
    '#ff1100',
];


function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.maxRadius = 40; //hardcoded
    this.minRadius = this.radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'blue';
        context.fillStyle = this.color;
        context.fill();
    }

    this.update = function() {
        //velocity and bouncing
        if(this.x > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if( this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;



        //interactivity 

        if((mouse.x - this.x) < 50 && (mouse.x - this.x) > -50
            && (mouse.y - this.y) < 50 && (mouse.y - this.y) > -50){
                if(this.radius < this.maxRadius){
                    this.radius += 1;
                }
        }
        else if(this.radius > this.minRadius){
            this.radius -=1;
        }


        //calling draw function from within....urgh
        this.draw();
    }
}
