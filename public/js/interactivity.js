

 //mapping to correct divs 
 const rightDiv = document.getElementById('rightDiv');
 const aboutContainer = document.getElementById('aboutContainer');
 const contactContainer = document.getElementById('contactContainer');
 const formContainer = document.getElementById('form-container');
 const searchContainer = document.getElementById('searchDiv');

 // setting up onclick
 document.getElementById('aboutLi').onclick= ()=>{display(aboutContainer)};
 document.getElementById('contactLi').onclick= ()=>{display(contactContainer)};
 document.getElementById('addLi').onclick= ()=>{display(formContainer)};
 document.getElementById('searchLi').onclick= ()=>{display(searchContainer)};
 document.getElementById('close').onclick= ()=>{
    rightDiv.classList.add("hidden");
 };



 var currentDiv;

 function display(option) {
 
    if(!currentDiv){
        currentDiv = option;
    }
    else{
        currentDiv.classList.add('hidden');
        currentDiv = option;
    }
    rightDiv.classList.remove("hidden");

    function hide(div){
        div.classList.remove("hidden");
    }
    hide(option);
 }






