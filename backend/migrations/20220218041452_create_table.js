/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema
    .createTable("article", (table) => {
      table.increments("id").primary();
      table.string("type");
      table.string("title");
      table.string("subtitle", 600);
      table.string("heroImage");
      table.string("pdf");
      table.string("datePublished");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("articleBlock", (table) => {
      table.increments("id").primary();
      table.integer('article_id').unsigned().references('id').inTable('article');
      table.string("type");
      table.string("attachmentLink");
      table.string("attachmentCaption");
      table.string("text", 6000)
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("contributor", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("bio", 3000);
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
    .createTable("article_contributor", (table) => {
      table.increments("id").primary();
      table.integer('article_id').unsigned().references('id').inTable('article');
      table.integer('contributor_id').unsigned().references('id').inTable('contributor');
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
    .dropTable("article_contributor")
    .dropTable("article_tag")
    .dropTable("tag")
    .dropTable("contributor")
    .dropTable("articleBlock")
    .dropTable("article");
};
