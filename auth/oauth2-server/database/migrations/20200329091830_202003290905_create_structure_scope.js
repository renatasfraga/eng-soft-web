exports.up = function(knex) {
  return knex.schema.createTable("scope", table => {
    table
      .bigIncrements("id")
      .unsigned()
      .primary();
    table.string("name").notNull();
    table.string("description");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("scope");
};
