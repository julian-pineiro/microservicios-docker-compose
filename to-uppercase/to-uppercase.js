var axios = require('axios');
var express = require('express');
var app = express();
var server = app.listen(3000);

app.get('/', function(req,res){
    axios.get('http://random-word:3000/')
    .then(function(response){
        res.send(response.data.toUpperCase());
    })
    .catch(function(error){
        console.log(error);
    });
  
});

