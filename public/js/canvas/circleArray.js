//making the array 
//reseting circle array
var circleArray = [];

function init(){
    //resetting circle
    circleArray = [];
    for(var i = 0 ; i < 1000; i++){
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5 * 4; 
        let dy = Math.random() - 0.5 * 4;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

}

