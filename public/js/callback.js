function callback(str){

    str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' ']/g,"");
    str = str.split(' ');

    const cleanArray = str.map(function(x){
        if(x != 'identity'){
            return x;
        }
    })

    var keyPairs



    // kk so the type is being entered as a string and we want an out put of an array
    // a filtered array that contains only the terms and no punctuation or 'identititys'
    /* then need to also find the number of different types defined in list 
     then incremnet to list if already exist.
     so may need to be object... 
     so basically loop through the array, 
     loop through key pairs
     if key pair exists, increment pair 
     if not then creat new key pair and set to one?
     then we'd have to make a ratio of all the values and split them dependent on all
     can we don any of this with SQL?*/ 

    console.log(array);

  
}