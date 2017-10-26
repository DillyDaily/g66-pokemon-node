const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

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
  }
}
