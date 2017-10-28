const knex = require("../db/knex.js");

module.exports = {

  getAll: function(req, res) {
    knex('trainers')
    .then((result)=>{
      
      res.render('trainers', {trainers: result});
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  getOne: function(req,res) {
    knex('trainers')
    .select('trainers.name', 'pokemon.name', 'pokemon.cp', 'pokemon.in_gym')
    .join('pokemon', 'pokemon.trainer_id', '=', 'trainers.id')
    .where('trainers.id', req.params.id)
    .then((result)=>{
      knex('trainers')
      .where('trainers.id', req.params.id)
      .then((resultTwo)=>{
        res.render('showTrainer', {display: result, trainerName: resultTwo[0]})
      })
    })
    .catch((err)=>{
      console.error(err)
    })
  }
}
