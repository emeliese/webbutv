var http = require('http');
var fs = require('fs');
var count = readCount();

http.createServer(function(request, response) {
    // why only accept '/'
    if (request.url !== '/') {
        response.writeHead(404);
        response.end("page not found");
        return;
    }
    count++; 
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(count.toString());
    response.end();
    writeCount();
}).listen(8080);

// explain the function
function readCount() {
    if (fs.existsSync('visitCount.txt')) {
        return fs.readFileSync('visitCount.txt').toString();
    } else {
        return 0;
    }
}

// write current 'count' to file
function writeCount() {
    fs.writeFile('visitCount.txt', count, function (err) {
        if (err) throw err;
    });
}
