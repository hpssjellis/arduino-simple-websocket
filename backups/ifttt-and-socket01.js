var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)



   let myData;
    var server2 = http.createServer ( function(request,response){

    response.writeHead(200,{"Content-Type":"text\plain"});
    if(request.method == "GET")
        {
            response.end("received GET request cool.");
            console.log('A GET was received');
        }
    else if(request.method == "POST")
        {
            response.end("received POST request.");
            console.log('A POST was received');
            request.on('data', function(data) {
                myData = data.toString();
               console.log(myData);
            })
           
        }
    else
        {
            response.end("Undefined request .");
            console.log('nothing');
        }
});

server2.listen(8000);
console.log("Server2 running on port 8000");



var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {
  var id = setInterval(function() {
      console.log("send ping: C")
      ws.send("C",function() {  })
    
  }, 12000)   
  
  console.log("websocket connection open " )
  //console.log(wss.data)
  
  ws.on('message', function(message) {
      console.log('received: %s', message);
     // wss.myBroadcast(message);  
      wss.broadcast(message);  
  });  
        
  ws.on("close", function() {
     console.log("websocket connection close")
     clearInterval(id)
  })
  
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      client.send(data);
    });
  };

})  // end wss.on
