//var http = require ("http");
//
//http.createServer (function (request, response ){
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//}).listen(8888);


var http = require ('http');
var envarb = getEnvarbs();

http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/plain"});
response.end("Envarbs: " + envarb);
}).listen(8888);

function getEnvarbs(){
     console.log(process.env);
     return (process.env);
 }; 
