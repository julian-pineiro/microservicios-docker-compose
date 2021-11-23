var express = require('express');
var app = express();
var server = app.listen(3000);

let words = ["apple", "banana", "orange", "pear", "grape", "strawberry", "kiwi", "mango", "watermelon", "pineapple"];

app.get('/', function(req, res){
        res.send(words[Math.floor(Math.random() * 10)]);
    });

