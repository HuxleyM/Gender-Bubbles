
window.onload = function(e){

    // make global URL 
    const URL = '//localhost/contents/gender_survey/';
    const form = document.getElementById('form'); // enure all caps 

    //for search functionality 
    var toSearch = document.getElementById("search");
    toSearch.addEventListener("click", search, false);
   
    ammendData();// this will ensure no blank screens.

 

    var start = true; // this start variable is controlling the ajax responses, apropriate o user is this in use

    // we need a way of getting this data on start. we can get php to echo it to us and simply collect.
    
    
    form.addEventListener("submit", function(evt) {
        // prevent default prevents the window from loading up again, as we are using ajax as opposed to post and get this is what we need. 
        evt.preventDefault();
        start = false;  //change start in response to user 
    
        if(!validateForm()){ // validateForm.
            ammendData(); // will call second ajax request, which then calls handler
             /* // variables that will be set through call back setters then passed to function */ 
           var dataArray = [];
           var total = undefined;   
        }
        else{
            console.log('errors');
        }

        // this is giving crossed feed back right now, alert is appearing errors appearing and so is success message but not added 
    })

/*-------------------------------------------------------------- Ajax Function: updating data */
        
function ammendData(){
    
    var dataToSend = [];
    if(start){
        var identity = null;
        var thought = null;
    }
    else{
        var identity = document.getElementById('gender').value;
        identity = encodeURI(identity); 
        var thought = document.getElementById('thoughts').value; 
        thought = encodeURI(thought);
    }  
    
    dataToSend.push(identity, thought);
   

      
        try {

            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                customHTTP = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                customHTTP = new ActiveXObject("Microsoft.XMLHTTP");
            }
             /// for MVC we always use this style , query string lives with Get, his is called clean URL 
             customHTTP.onreadystatechange = function() {
                
                if (this.readyState == 4 && this.status == 200) {
                    console.log('xml response :', customHTTP, customHTTP.responseText)
                    //let parsedArray = xmlhttp.responseText;
                   let parsedArray = JSON.parse(decodeURI(customHTTP.responseText));
                    ammendDataCallBack(parsedArray);
                    updateTotal();
                } else {
                   //console.log('problem with ammend');
                
                };
            };

            customHTTP.open("GET",`${URL}data/add/${encodeURI(JSON.stringify(dataToSend))}`, true);
            customHTTP.send();

            //changing start value to false
            start = false;
        }

         catch(error){
             console.error(error);
        }
    }

/*-------------------------------------------------------------- Ajax Function: getting total */
var updateTotal = function(){
    // m
      
        try {

            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                total = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                total = new ActiveXObject("Microsoft.XMLHTTP");
            }
             /// for MVC we always use this style , query string lives with Get, his is called clean URL 
             total.onreadystatechange = function() {
                
                if (this.readyState == 4 && this.status == 200) {
                    let parsedInt = JSON.parse(total.responseText);
                    totalCallBack(parsedInt);
                    dataHandler(dataArray, total);
                    if(start){
                        // we need to rethink the design here
                        feedback.innerHTML = 'Hover on a circle to find out more!'
                    }
                    else{
                        feedback.innerHTML = 'Sweet! your response has been added! </br> hover on a circle to find out more!';
                    }
        
                } else {
                   feedback.innerHTML = "loading....";
                }
            };

            total.open("GET",`${URL}data/total`, true);
            total.send();
        }
                   
         catch(error){
             console.error(error);
        }
};

/*-------------------------------------------------------------- setter Functions: callback */
 function ammendDataCallBack(x){
     if(x){
         return dataArray = x;
        
     }
 }

 function totalCallBack(x){
    if(x){
        //changing layout of form to allow for search 
       return  total = x;
  
    }       
}

   //adding responsive
   responsive(ammendData);

}// closing window onload.
