function validateForm(){
    var error = false;
    var errorBox = document.getElementById('errors');
    var identity = document.getElementById('gender').value; // should this be a constant delcared...

    if(identity == undefined || identity == '' || identity == null){
        error = true;
        errorBox.innerHTML='Do not leave this blank!';
    } 
    else{
        var txt;
        if (confirm("Please confirm the spelling of your idenitity " + identity )) {
            txt = "This has been succesfully added!";
        } else {
            txt = "Please ammend and try again";
            error = true;
        }
        document.getElementById("feedback").innerHTML = txt;
      }
    return error;
}
