var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    bodyParser = require('body-parser');
    cors = require('cors')

app.use(cors()) // Use this after the variable declaration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var detailsroutes= require("./routes/details");

app.get("/", function(req, res){
  res.send("I'm runningss")
});

app.use("/api/details",detailsroutes);
var app_port = process.env.YOUR_PORT || process.env.PORT || 80||3000;
var app_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(app_port, app_host, function() {
  console.log('Listening on port %d', app_port);
});
