/*-------------------------------------- canvas start */

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');



/*-------------------------------------- animation */
function animate(){
   requestAnimationFrame(animate);
   //clearing
   context.clearRect(0, 0, innerWidth, innerHeight); 
   for(var i = 0; i < circleArray.length; i++){
       circleArray[i].update();
   }
}

// call to animate
animate();