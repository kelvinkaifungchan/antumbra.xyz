/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("article", (table) => {
      table.increments("id").primary();
      table.string("type");
      table.string("author");
      table.string("title");
      table.string("subtitle");
      table.string("datePublished");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("attachment", (table) => {
      table.increments("id").primary();
      table.integer('article_id').unsigned().references('id').inTable('article');
      table.string("attachmentLink");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("tag", (table) => {
      table.increments("id").primary();
      table.string("tag");
    })
    .createTable("article_tag", (table) => {
      table.increments("id").primary();
      table.integer('article_id').unsigned().references('id').inTable('article');
      table.integer('tag_id').unsigned().references('id').inTable('tag');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("article_tag")
    .dropTable("tag")
    .dropTable("attachment")
    .dropTable("article");
};
