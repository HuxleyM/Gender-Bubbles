//color for circles
//global variables for circle


var colorArray = [
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#e76f51',
];


class IdentityCircle {

    constructor(identity, quanitity, total){
        this.identity = identity;
        this.quanitity = quanitity;
        this.total = total; 
        this.decimalRatio = quanitity / total;
        this.radius = this.decimalRatio * innerWidth / 5;

        this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
        this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
     
        this.dx = Math.random() * (2.5 - -2) +- 2;   // adjust speed little fast right now.
        this.dy = Math.random() * (2.5 - -2) +- 2; 
        //
      
        this.maxRadius = innerWidth / 5;
        this.minRadius = this.radius;
        //
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.current = false;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        
        if(this.current){
            context.strokeStyle = 'white';
            context.lineWidth = 5;
            context.stroke();
        }
    }

    update(){
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
                // this makes sure only the current circle has the stroke 
                circleArray.forEach(function(x){
                    x.current = false;
                })
                document.getElementById('details').innerHTML = this.identity + " : " + this.quanitity;
                this.current = true;
        }
        else if(this.radius > this.minRadius){
            this.radius -=1;
        }


        //calling draw function from within....urgh
        this.draw();
    }

}
