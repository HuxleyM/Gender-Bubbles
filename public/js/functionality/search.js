function search(){
    var x = document.getElementById('gender').value; 
    circleArray.forEach(element => {
        if(element.identity == x){
            element.current = true;
            document.getElementById('details').innerHTML = element.identity + " : " + element.quanitity;
        }
        else{
            element.current = false;
        }
    });
}