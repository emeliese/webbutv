var http = require('http');

http.createServer(function(request, response){
    var envarb = showObject(process.env);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(envarb);
}).listen(8888);

 function showObject(obj) {
    var result = "";
      for (var p in obj) {
      if(obj.hasOwnProperty(p) ) {
          result += p + ": " + obj[p] + "\n";
      } 
    }            
    return result;
  }