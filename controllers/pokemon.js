const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    res.redirect('/pokemon')
  },

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

  getOne: function(req,res){
    knex('pokemon')
      .select('pokemon.name', 'trainers.name', 'pokemon.cp', 'pokemon.in_gym', 'trainers.id')
      .join('trainers', 'trainers.id', '=', 'pokemon.trainer_id')
      .where('pokemon.id', req.params.id)
      .then((result)=>{
        knex('pokemon')
        .where('pokemon.id', req.params.id)
        .then((resultTwo)=>{
          let poke = resultTwo[0];
          res.render('showPokemon', {profile: result, pokemon: poke})
        })
      })
  },

  create: function(req, res) {
    knex('pokemon')
    .insert({
      name: req.body.name,
      trainer_id: req.body.trainer_id,
      cp: req.body.cp,
      in_gym: req.body.in_gym
    }, '*')
    .then((result)=>{
      res.redirect('/pokemon');
      
    })
    .catch((err)=>{
      console.error(err)
    })
  },

  edit: function(req, res){
    knex('trainers')
    .then((getName)=>{

      knex('pokemon')
      .select('pokemon.name', 'trainers.name', 'pokemon.cp', 'pokemon.in_gym', 'trainers.id')
      .join('trainers', 'trainers.id', '=', 'pokemon.trainer_id')
      .where('pokemon.id', req.params.id)
      .then((result)=>{
        knex('pokemon')
        .where('pokemon.id', req.params.id)
        .then((resultTwo)=>{
          let poke = resultTwo[0];
          let first = result[0];
          console.log(getName);
          res.render('editPokemon', {profile: first, trainers: poke, name:getName})
        })
      })
    })
    // knex('trainers')
    // .then((resultTwo)=>{
    //   knex('pokemon')
    //   .then((poke)=>{
    // knex('pokemon')
    // .select('pokemon.name', 'pokemon.cp', 'pokemon.in_gym', 'trainers.id')
    // .join('trainers', 'trainers.id', '=', 'pokemon.trainer_id')
    // .where('pokemon.id', req.params.id)
    // .then((result)=>{
    //   console.log(result.name)
    //     res.render('editPokemon', {profile: result, trainers: resultTwo, poke:poke[0]})
    //     })
    //   })
    // })
  },

  update: function(req, res){ 
    knex('pokemon')
    .update({
      trainer_id: req.body.trainer
    })
     
      // .update(req.body)
      // .where('id', req.params.id)
      .then(()=>{
        res.redirect('/pokemon/getOne/'+req.params.id);
      })
      .catch((err)=>{
        console.error(err)
      // })
    })
    },

  delete: function(req, res){
    knex('pokemon')
    .del()
    .where('id', req.params.id)
    .then(()=>{
      res.redirect('/pokemon')
    })
    .catch((err)=>{
      console.error(err)
    });
  }

}
