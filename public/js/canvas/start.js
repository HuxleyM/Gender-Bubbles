var canvas = document.querySelector('canvas');
// these are initalised here but changed in responsiveness - could responsivenss go here?
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

function animate(){
   requestAnimationFrame(animate);
   //clearing
   context.clearRect(0, 0, innerWidth, innerHeight);
  
   for(var i = 0; i < circleArray.length; i++){
       circleArray[i].update();
   }
}
init();
animate();