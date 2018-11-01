/**
 * 
 * this file contains all minor functions used for interactivity with the site 
 */
 /*

*/
/**
 * These functions control the display of the menu and corresponding information
 */

 var currentDiv = undefined;

 function hideDiv(element){
    console.log('im closing');
    document.getElementById(element).style.margin = "0px";
    document.getElementById(element).style.height = "0px";
    document.getElementById(element).style.overflow ='hidden'; 
 }

 function createDiv(){
    var newDiv = document.createElement("div"); 
    newDiv.setAttribute("id", "rightDiv");
    return newDiv;
 }

 function appendDiv(divId, where ='container'){ //what , where
    document.getElementById(where).appendChild(divId);
 }


 // need to store last to be done or always label with same id or class so always cleared before
 
 function display(option) {
    var parent = document.getElementById('container');
    clearDisplay();

    if(currentDiv != undefined){
        hideDiv(currentDiv);
    }
    
    //currentDiv = option;
    switch (option){

        case 'about':
            var newDiv = createDiv();
            var node = document.createTextNode("This is a project designed to show and represent all the gender idenities there are and can be. The scale of the circles in relations to each other, represents the number of people identifying with this gender type. This site relies on trust, if there harmful or offesnsive inputs placed in please contact here: Also contact if there are peices of constructive critism i could use to make this tool better for us all :)");
            newDiv.appendChild(node);
            appendDiv(newDiv)
            break;
        case 'contact':
            var newDiv = createDiv();
            var a = document.createElement('a');
            var linkText = document.createTextNode("here");
            a.appendChild(linkText);
            a.title = "link";
            a.href = "mailto:contact@genderbubble.com";
            var node = document.createTextNode(`This site relies on trust, email. Please include the inapropriate message in the subject heading. Also contact us with any thoughts`);
            newDiv.appendChild(node);
            newDiv.appendChild(a);
            appendDiv(newDiv)
            break;
        case 'add':
            // the append of moving the containers is not working ....
            document.getElementById("form-container").style.margin = "1em 0em";
            document.getElementById("form-container").style.height = "16em";
            document.getElementById("form-container").style.overflow = "scroll";
            break;
        case 'search':
            document.getElementById("searchDiv").style.margin = "1em 0em";
            document.getElementById("searchDiv").style.height = "auto";
            break;
        case 'thought':
            break;
        default:
            alert('problem');
            break;
    }
 }
 document.getElementById('aboutLi').onclick= ()=>{display('about')};
 document.getElementById('contactLi').onclick= ()=>{display('contact')};
 document.getElementById('addLi').onclick= ()=>{display('add')};
 document.getElementById('searchLi').onclick= ()=>{display('search')};
 document.getElementById('thoughtLi').onclick= ()=>{display('thought')};



 // adding clearing functionality here


function clearDisplay(){

    if(document.getElementById('rightDiv')){
        let removeDiv = document.getElementById('rightDiv');
        removeDiv.remove();

    }
}

 document.getElementById('leftDiv').onmouseout = () => {clearDisplay()};
 document.getElementById('closeForm').onclick = () => {hideDiv('form-container')}; // this are not working as they should
 document.getElementById('closeSearch').onclick = () => {hideDiv('searchDiv')}; // no these should work
 