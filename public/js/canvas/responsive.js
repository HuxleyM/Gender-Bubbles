function responsive(func){
    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        func(); // resizing functions
    })
}