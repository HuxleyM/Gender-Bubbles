//color for circles
var colorArray = [
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#e76f51',
    '#264653'
];
//------------------------------------------------ function to swap stroke function
var chosenCircle;

function swap(circle){
    if(!chosenCircle){
        chosenCircle = circle;
    }
    chosenCircle.chosen = false;
    chosenCircle = circle;
    chosenCircle.chosen = true;
}

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
        this.chosen = false;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        
        if(this.chosen){
            context.strokeStyle = 'black';
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
                // external swap function 
                swap(this);
                /*
              
                     //displays details
                    document.getElementById('details').innerHTML = `<hr> ${this.quanitity} others also identified as ${this.identity}`;
                    // call to thoughts js to retreive thoughts on gender to be displayed index
                    thoughts(this.identity);
                }
               */
        } else {
            // noThoughts()
            if(this.radius > this.minRadius){
                this.radius -=1;
            }
        }
        //calling draw function from within....urgh
        this.draw();
    }

}
