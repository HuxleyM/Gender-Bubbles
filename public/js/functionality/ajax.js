
window.onload = function(e){

    // make global URL 
    const URL = '//localhost/contents/gender_survey/';
    const form = document.getElementById('form');

    
    form.addEventListener("submit", function(evt) {
        // prevent default prevents the window from loading up again, as we are using ajax as opposed to post and get this is wahat we need. 
        evt.preventDefault();
        ammendData(); // will call second ajax request, which then calls handler

       /* // variables that will be set through call back setters then passed to function */ 
        var dataArray = [];
        var total = undefined;   
    })

/*-------------------------------------------------------------- Ajax Function: updating data */
        
function ammendData(){
        
            const identity = document.getElementById('gender').value;
         
      
        try {

            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
             /// for MVC we always use this style , query string lives with Get, his is called clean URL 
            xmlhttp.onreadystatechange = function() {
                
                if (this.readyState == 4 && this.status == 200) {
                    let parsedArray = JSON.parse(xmlhttp.responseText);
                    ammendDataCallBack(parsedArray);
                    updateTotal();
                  
        
                } else {
                    temporaryDump.innerHTML = "Loading...";
                };
            };

            xmlhttp.open("GET",`${URL}data/add/${identity}`, true);
            xmlhttp.send();
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
                  
        
                } else {
                    //contents.innerHTML = "Loading...";
                };
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
       return  total = x;
  
    }       
}
}// closing window onload.