

<canvas> Your browser doesnt support canvas :0 </canvas>

<div id='overlay'></div> <!-- this will be opacity grey -->

<h1>GENDER BUBBLES</h1>
<div class='decoration' id='leftTop'></div>
<div class='decoration' id='rightTop'></div>
<div class='decoration' id='leftBottom'></div>
<div class='decoration' id='rightBottom'></div>
<!--Decorations--->



<!-- forms --> 

<div id='container'>
    <div id='leftDiv'>
        <ul>
            <li id='aboutLi'>- ABOUT</li>
            <li id='contactLi'>- CONTACT</li>
            <li id='addLi'>- ADD</li>

                <div id='form-container'>
                    <form id='form' method='POST'>
                        <div id='partOne'><!-- add-->
                            <label for = 'gender'> 
                                Please enter your most preferred gender identity :) don't worry you can enter another one afterwards! 
                                or alternatively, click search to find an identity.
                            </label> </br>
                            <input type = 'text' id='gender'>
                            <hr>
                            <label for = 'thoughts'> 
                                What do you think about gender? How do you describe your gender? (100 words max)
                                What would you say to a younger you who may be struggling with theirs? 
                            </label> </br>
                            <hr>
                            <textarea name='thoughts' id='thoughts'></textarea>
                            </br>
                            <input type = 'submit' value = '+' id='submit'>
                            <h3 id='closeForm'> close </h3>
                        </div>    
                    </form>

                    <div id='errors'></div> 
                    <div id='feedback'></div>
                </div> <!-- closing the container -->
            <li id='searchLi'>- SEARCH</li>     
                <div id='searchDiv'>
                    <label for = 'search'> 
                        search for your identity
                        </label> </br>
                        <input type = 'text' id='searchField'>
                        <button id ='search' type='button'>search</button>
                        <h3 id='closeSearch'> close </h3>
                </div>
            <li id='thoughtLi'>- THOUGHTS </li>
                <div id='details'></div>
                <div id='thoughtContainer'></div>
        </ul>
    </div>
</div> 





<div id='overlay'></div> <!-- this will be opacity grey -->