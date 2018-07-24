
window.onload = function(e){

    // make global URL 
    const URL = '//localhost/contents/gender_survey/';
    const form = document.getElementById('form');
    
    form.addEventListener("submit", function(evt) {
        // prevent default prevents the window from loading up again, as we are using ajax as opposed to post and get this is wahat we need. 
        evt.preventDefault();
        
        // using higher order to call both
        ammendData(updateTotal); /// ------------ this should be done better..
    })


/*-------------------------------------------------------------- Ajax Function: updating data */
        
function ammendData(func){
        
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
                    //callback(xmlhttp.responseText);
                    console.log(xmlhttp.responseText)
                    func(); /// ----- thibk this heres pretty messy actuallly.....
                    contents.innerHTML = xmlhttp.responseText;
        
                } else {
                    contents.innerHTML = "Loading...";
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
                    //callback(xmlhttp.responseText);
                    console.log('total'+ total.responseText)
        
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

}// closing window onload.

