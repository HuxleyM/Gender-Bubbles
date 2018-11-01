function search(){

    var x = document.getElementById('searchField').value;
    circleArray.forEach(element => {
        if(element.identity == x){
            element.current = true;
            thoughts(element.identity);
            document.getElementById('details').innerHTML = element.quanitity + 'others identified as ' + element.identity ;
        }
        else{
            element.current = false;
        }
    });
}