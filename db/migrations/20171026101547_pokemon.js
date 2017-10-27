
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pokemon', (table)=>{
        table.increments();
        table.integer('trainer_id')
            .references('id')
            .inTable('trainers')
            .onDelete('CASCADE')
            .index();
        table.string('name');
        table.string('cp');
        table.boolean('in_gym');
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pokemon');
};