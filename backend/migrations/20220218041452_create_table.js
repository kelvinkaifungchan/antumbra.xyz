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
      table.string("subtitle", 600);
      table.string("moduleType");
      table.string("heroImage");
      table.string("datePublished");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("attachment", (table) => {
      table.increments("id").primary();
      table.integer('article_id').unsigned().references('id').inTable('article');
      table.string("attachmentType");
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
    })
    .createTable("archive", (table) => {
      table.increments("id").primary();
      table.integer("issue");
      table.string("title");
      table.string("date");
      table.string("link");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("archive")
    .dropTable("article_tag")
    .dropTable("tag")
    .dropTable("attachment")
    .dropTable("article");
};
