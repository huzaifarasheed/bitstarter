var express = require('express');
var fs=require('fs');
var htmlfile="index.html";

var app = express.createServer(express.logger());
app.use("/css", express.static(__dirname + '/css'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/less", express.static(__dirname + '/less'));
app.use("/bootstrap", express.static(__dirname + '/bootstrap'));





app.get('/', function(request, response) {
    var html=fs.readFileSync(htmlfile).toString();
    response.send(html);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
