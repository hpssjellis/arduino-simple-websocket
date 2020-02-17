var http = require('http');
    var server = http.createServer ( function(request,response){

    response.writeHead(200,{"Content-Type":"text\plain"});
    if(request.method == "GET")
        {
            response.end("received GET request cool.");
            console.log('A GET was received');
            console.log(request);
        }
    else if(request.method == "POST")
        {
            response.end("received POST request.");
            console.log('A POST was received');
            console.log(request.headers);
        }
    else
        {
            response.end("Undefined request .");
            console.log('nothing');
            console.log(request);
        }
});

server.listen(8000);
console.log("Server running on port 8000");
