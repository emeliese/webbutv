var Emelie = {favFood: "pizza",favMovie: "Deathproof"}; 
var person = showObject();

function showObject(Emelie) {
  var result = 0;
    for (var p in Emelie) {
    if(Emelie.hasOwnProperty(p) ) {
        result++ /*+= p + " , " + Emelie[p] + "\n";*/
    } 
  }            
  return result;
}
console.log("Something" + person);

// function Iterator(o){
//     Emelie.keys(o).forEach(function(key) {
//     var val = o[key];
//     logic();
// });
// }

  // for(var i = 0; i < Emelie ;i++){
  //       console.log("Emelie");
  // };

  // function composeMessage(message){
  //     console.log("Loading message %d".green, message);
  //     htmlMessageboardString += MessageToHTMLString(message);
  // }

// console.log(count);