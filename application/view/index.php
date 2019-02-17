

<canvas> Your browser doesnt support canvas :0 </canvas>



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
            <li id='searchLi'>- SEARCH</li>              
            <li id='thoughtLi'></li>
            <div id='details'></div> <!-- do we need this div? -->
            <div id='thoughtContainer'></div>
        </ul>
    </div>
</div> 

   <div id ='rightDiv' class='hidden'>
       <!-- about  section-->
       <p id='aboutContainer' class='hidden' >
       This is a project designed to show and represent all the gender idenities there are and can be. The scale of the circles in relations to each other, represents the number of people identifying with this gender type. This site relies on trust, if there harmful or offesnsive inputs placed in please contact here: Also contact if there are peices of constructive critism i could use to make this tool better for us all :)
       </p>
       
       <!-- contact section-->
       <p id='contactContainer' class='hidden'>
       This site relies on trust, email. Please include the inapropriate message in the subject heading. Also contact us with any thoughts
       <a href='mailto:contact@genderbubble.com'> email here </a>
       
       </p>
       <!-- add section-->
        <div id='form-container' class='hidden'>
            <form id='form' method='POST'>
                <label for = 'gender'> 
                    Please enter your most preferred gender identity :) don't worry you can enter another one afterwards! 
                    or alternatively, click search to find an identity.
                </label> 
                <input type = 'text' id='gender'>
                <label for = 'thoughts'> 
                    What do you think about gender? How do you describe your gender? (100 words max)
                    What would you say to a younger you who may be struggling with theirs? 
                </label> 
                <textarea name='thoughts' id='thoughts'></textarea>
                <input type = 'submit' value = '+' id='submit'>
              
            </form>
            <div id='feedback'></div>
        </div> <!-- closing the add /form container -->
       <!-- search section-->
        <div id='searchDiv' class='hidden'>
            <label for = 'search'> 
                search for your identity
            </label> 
            <input type = 'text' id='searchField'>
            <button id ='search' type='button'>search</button>
    
        </div>
        <h3 id='close'> close </h3>
   </div>




<div id='overlay'></div> <!-- this will be opacity grey -->
