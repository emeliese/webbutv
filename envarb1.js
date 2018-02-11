//var http = require ("http");
//
//http.createServer (function (request, response ){
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//}).listen(8888);


var http = require ('http');
var envarb = showObject(process.env);

http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/plain"});
response.end(envarb);
}).listen(8888);

function getEnvarbs(){
     console.log(process.env);
     return (process.env);
 }; 

 function showObject(obj) {
    var result = "";
      for (var p in obj) {
      if(obj.hasOwnProperty(p) ) {
          result += p + ": " + obj[p] + "\n";
      } 
    }            
    return result;
  }