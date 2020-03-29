/**
 * @param {import('knex')} knex
 */

exports.up = function(knex) {
  return knex.schema.createTable("clientHasScope", table => {
    table
      .bigInteger("clientId")
      .unsigned()
      .index()
      .references("id")
      .inTable("client");
    table
      .bigInteger("scopeId")
      .unsigned()
      .index()
      .references("id")
      .inTable("scope");
    table.primary("clientId", "scopeId");
  });
};

/**
 * @param {import('knex')} knex
 */
exports.down = function(knex) {
  return knex.schema.dropTable("userHasScope");
};
