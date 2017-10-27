const knex = require("../db/knex.js");

module.exports = {

    index: function(req, res) {
        if(!req.session.battle){
        req.session.battle = [];
        }
        knex('pokemon')
        .then((results)=>{
        res.redner('gym', {pokemon: results, battle: req.session.battle})
        })
        .catch((err)=>{
            console.error(err)
        })
    },

}