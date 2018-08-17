<div id='container'>
    <form id='form' method='POST'>
        <label for = 'gender'> Please enter your most preferred gender identity :) </br> don't worry you can enter another one afterwards
        </label> </br>
        <hr>
        <input type = 'text' id='gender'>
        <input type = 'submit' value = '+' id='submit'>
        <button id ='search' type='button'>search</button>
       
    </form>
    
    <div id='errors'></div> 
    <div id='feedback'></div>
    <div id='details'></div>
</div> <!-- closing the container -->

<canvas> Your browser doesnt support canvas :0 </canvas> 

<!-- here we echo whats been fetched from the data controller already, 
we can pass this streight to the call back function 
https://stackoverflow.com/questions/23740548/how-to-pass-variables-and-data-from-php-to-javascript
--> 