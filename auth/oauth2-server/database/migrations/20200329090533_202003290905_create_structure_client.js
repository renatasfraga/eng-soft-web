exports.up = function(knex) {
  return knex.schema.createTable("client", table => {
    table
      .bigIncrements("id")
      .unsigned()
      .primary();
    table
      .string("username")
      .unique()
      .notNull();
    table.string("password").notNull();
    table.bigInteger("expirationTime").notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("client");
};
