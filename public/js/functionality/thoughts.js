function thoughts(identity){
    
    var identity = identity;
    var dataArray =[]; //defined and reset on ajax calls    
    // SEND AJAX 

    try {

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            thoughtshttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            thoughtshttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        /// for MVC we always use this style , query string lives with Get, his is called clean URL 
        thoughtshttp.onreadystatechange = function() {
            
            if (thoughtshttp.readyState == 4 && thoughtshttp.status == 200) {
                let parsedThoughtArray = JSON.parse(thoughtshttp.responseText); 
                ammendThoughtsCallBack(parsedThoughtArray);
            } else {
            //console.log('problem with thoughts');
            };
        };

        thoughtshttp.open("GET",`//localhost/contents/gender_survey/data/thoughts/${identity}`, true);
        thoughtshttp.send();
    }

    catch(error){
        console.error(error);
    }
}


function  ammendThoughtsCallBack(x){
    if(x){
      dataArray = x;
      displayThoughts(dataArray);
    }
}



function displayThoughts(arr){
    clearInterval(displayTimer);
    let length = arr.length;
    let currentThought = Math.floor(Math.random() * length); 
    //ive got set interval down
    var displayTimer = setInterval(function(){
       document.getElementById('thoughtContainer').innerHTML = "' " +arr[currentThought] + "' ";
       currentThought++;
       if(currentThought > (length -1)){
           currentThought = 0;
       }  
   },10000);
}
