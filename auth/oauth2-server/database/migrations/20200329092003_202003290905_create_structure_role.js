exports.up = function(knex) {
  return knex.schema.createTable("role", table => {
    table
      .bigIncrements("id")
      .unsigned()
      .primary();
    table.string("routeApi").notNull();
    table.string("description").notNull();
    table
      .bigInteger("scopeId")
      .unsigned()
      .index()
      .references("id")
      .inTable("scope");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("role");
};
