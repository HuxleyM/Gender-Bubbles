var Mouse = {
    x : undefined,
    y: undefined
}


window.addEventListener('mousemove', function(event){
    Mouse.x = event.x;
    Mouse.y = event.y;
})


//-------------------------- build this into circle.js 
window.addEventListener('mousedown', function(event){
    Mouse.click = true; 
})