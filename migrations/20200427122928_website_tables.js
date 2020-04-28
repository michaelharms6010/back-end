exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("id").primary();
      tbl.string("username", 40).unique().notNullable();
      tbl.string("password", 40).notNullable();
      tbl.string("email", 60).unique().notNullable();
      tbl.string("name", 100).notNullable();
      tbl.integer("age").notNullable();
      tbl.boolean("terms").defaultTo(false);
    })
    .createTable("posts", (tbl) => {
      tbl.increments("id").primary();
      tbl.string("post").notNullable();
      tbl.string("caption", 250);
      tbl.timestamp("date").defaultTo(knex.fn.now());
      tbl.integer("userId")
      .references("users.id")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })
    .createTable("comments", (tbl) => {
      tbl.increments("id").primary();
      tbl.string("comment", 250).notNullable();
      tbl.timestamp("date").defaultTo(knex.fn.now());
      tbl.integer("postId")
      .references("posts.id")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })
    .createTable("users_comments", (tbl) => {
      tbl.increments("id");
      tbl.integer("usersId")
      .references("users.id")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      tbl
        .integer("commentsId")
        .references("comments.id")
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users_comments")
    .dropTableIfExists("comments")
    .dropTableIfExists("posts")
    .dropTableIfExists("users");
};
