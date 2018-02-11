var Emelie = {favFood: "pizza",favMovie: "Deathproof"}; 
var person = showObject(Emelie);

function showObject(obj) {
  var result = "";
    for (var p in obj) {
    if(obj.hasOwnProperty(p) ) {
        result += p + " , " + obj[p] + "\n";
    } 
  }            
  return result;
}
console.log(person);

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