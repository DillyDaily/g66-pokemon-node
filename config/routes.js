const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");
var express = require('express');
module.exports = function(app){

app.get('/', pokemon.index);

app.get('/pokemon', pokemon.getAll);

app.get('/pokemon/add', pokemon.addOne);

app.post('/pokemon/add', pokemon.create);


// app.get()

}