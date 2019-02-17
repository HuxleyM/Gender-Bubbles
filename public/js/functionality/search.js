function search(){
    //search functionality in nav bar
    var x = document.getElementById('searchField').value;

    circleArray.forEach(element => {
        if(element.identity == x){
            swap(element);
            thoughts(element.identity, element.quanitity); 
        }
    });
}