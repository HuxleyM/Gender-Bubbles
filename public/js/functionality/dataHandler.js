
var circleArray = []; // is there away to use closures to not have this floating alone

function dataHandler(obj , int ){
  circleArray = [];
   //ok so json actually converts to an object array
  if(int > 0){ // if theres a value do this.
    for (var key in obj) {
      let test = obj[key]; //seperating into arrays
      let identity = test[0];
      let quantity = test[1];
      let total = int;
      // now need to call the circle constructior.
      circleArray.push(new IdentityCircle(identity, quantity, total));
    }
  }
}