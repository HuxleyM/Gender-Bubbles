
window.onload = function(e){

    // make global URL 
    const URL = '//localhost/contents/gender_survey/';
    const form = document.getElementById('form');
    
    form.addEventListener("submit", function(evt) {

        const identity = document.getElementById('gender').value;
        // prevent default prevents the window from loading up again, as we are using ajax as opposed to post and get this is wahat we need. 
        evt.preventDefault();
      
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
                    callback(xmlhttp.responseText);
        
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
          
       
     })
}
    