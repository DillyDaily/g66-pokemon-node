const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    res.redirect('/pokemon');
  },
  // index: function(req, res) {
  //   if(!req.session.user){
  //     req.session.user = [];
  //   }
  //   knex('pokemon')
  //   .then((results)=>{
  //     res.redner()
  //   })
  //   res.redirect('/pokemon');
  // },

  getAll: function(req, res) {
    knex('pokemon')
    .then((result)=>{
      
      res.render('pokemon', {pokemon: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  addOne: function(req,res){
    knex('pokemon')
    .then((result)=>{

      res.render('addPokemon', {pokemon: result});
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  create: function(req, res) {
    knex('pokemon')
    .insert({
      name: req.body.name,
      trainer_id: req.body.trainer_id,
      cp: req.body.cp,
      in_gym: req.body.in_gym
    }, '*')
    // console.log('wtf ' + req.body.id)
    .then((result)=>{
      res.redirect('/pokemon');
    })
    .catch((err)=>{
      console.error(err)
    })
  }
}
