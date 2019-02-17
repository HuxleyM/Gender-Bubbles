// global variables for this to work 
var interval;
var counter = 0;
var thoughtContainer = document.getElementById('thoughtContainer');
var thoughtsArray = []; //defined and reset on ajax calls 


function thoughts(identity, quanitity){
 
    document.getElementById('details').innerHTML = '</br>' ;
    document.getElementById('details').innerHTML = `<hr/>${quanitity} others also identified as ${identity}`;
   

    //---------------------- ------------------SEND AJAX 

    try {

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            thoughtshttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            thoughtshttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        thoughtshttp.onreadystatechange = function() {
            
            if (thoughtshttp.readyState == 4 && thoughtshttp.status == 200) {
                let parsedThoughtArray = JSON.parse(thoughtshttp.responseText); 
                ammendThoughtsCallBack(parsedThoughtArray);
            } else {
            //console.log('problem with thoughts');
            };
        };

        thoughtshttp.open("GET",`${URL}/data/thoughts/${identity}`, true);
        thoughtshttp.send();
    }

    catch(error){
        console.error(error);
    }
}


function  ammendThoughtsCallBack(x){
    if(x){
      thoughtsArray = x; //got array
      if(interval){clearInterval(interval)}; //stopping existing behaviour 
      displayThoughts(); //loop
    }
}

function displayThoughts(){
    interval = setInterval(timer, 1000);
    return interval;
}
  
   
function timer() {
    let arr = thoughtsArray;
    if(!arr[counter]){
        counter = 0;
    }
    thoughtContainer.innerHTML = arr[counter];
    counter++;
}