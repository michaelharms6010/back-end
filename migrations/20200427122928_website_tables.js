exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("id").primary();
      tbl.text("username", 250).unique().notNullable();
      tbl.text("password", 250).notNullable();
      tbl.text("email", 250).unique().notNullable();
      tbl.text("name", 250).notNullable();
      tbl.integer("age").notNullable();
      tbl.boolean("terms").defaultTo(false);
    })
    .createTable("posts", (tbl) => {
      tbl.increments("id").primary();
      tbl.text("post").notNullable();
      tbl.text("caption", 250);
      tbl.timestamp("date").defaultTo(knex.fn.now());
      tbl.integer("userId")
      .references("users.id")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })
    .createTable("comments", (tbl) => {
      tbl.increments("id").primary();
      tbl.text("comment", 250).notNullable();
      tbl.timestamp("date").defaultTo(knex.fn.now())
      tbl.integer("userId")
      .references("users.id")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      tbl.integer("postId")
      .references("posts.id")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("comments")
    .dropTableIfExists("posts")
    .dropTableIfExists("users");
};
