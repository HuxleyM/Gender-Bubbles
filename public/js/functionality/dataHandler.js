
var circleArray = []; // is there away to use closures to not have this floating alone

function dataHandler(obj , int ){
  circleArray = [];
  if(int > 0){ // if theres a value do this.
    for (var key in obj) {
      let test = obj[key]; //seperating into arrays
      //  circleArray.push(new IdentityCircle(identity, quantity, total));
      circleArray.push(new IdentityCircle(test[0], test[1], int));
    }
  }
}