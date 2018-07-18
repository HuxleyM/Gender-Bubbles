<form id='form' method='POST'>
    <label for = 'gender'> Gender </label> </br>
    <input type = 'text' id='gender'> 
    <input type = 'submit' value = 'Submit'>
</form>

<div>
    <p id = 'contents'>
        'is anything here'
    </p>
</div>

<!-- here we echo whats been fetched from the data controller already, 
we can pass this streight to the call back function 
https://stackoverflow.com/questions/23740548/how-to-pass-variables-and-data-from-php-to-javascript
--> 

<div id="dom-target">
    <?php 
        echo json_encode($info);
    ?>
</div>

