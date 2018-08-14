function dataHandler(obj , int ){
   //ok so json actually converts to an object array
 
 for (var key in obj) {
    let test = obj[key];
    let identity = test[0];
    let quantity = test[1];
    let decimalPercent = quantity /  int;
    // now need to call the circle constructior.
    document.getElementById('temporaryDump').innerHTML= '<p>'+identity + ' '+ quantity + '\n'+ '</p>';
}
 
}