
exports.seed = function(knex) {
  return knex('posts_comments').del()
    .then(function () {
      return knex('posts_comments').insert([
        {id: 1, posts_id: 1 , comments_id: 1},
        {id: 2, posts_id: 1 , comments_id: 2},
        {id: 3, posts_id: 2 , comments_id: 3},
        {id: 4, posts_id: 2 , comments_id: 4},
        {id: 5, posts_id: 2 , comments_id: 5},
        {id: 6, posts_id: 3 , comments_id: 6},
        {id: 7, posts_id: 3 , comments_id: 7},
        {id: 8, posts_id: 3 , comments_id: 8},
        {id: 9, posts_id: 4 , comments_id: 9},
        {id: 10, posts_id: 4 , comments_id: 10},
        {id: 11, posts_id: 5 , comments_id: 11},
        {id: 12, posts_id: 6 , comments_id: 12},
        {id: 13, posts_id: 6 , comments_id: 13},
        {id: 14, posts_id: 7 , comments_id: 14},
        {id: 15, posts_id: 7 , comments_id: 15},
        {id: 16, posts_id: 7 , comments_id: 16},
        {id: 17, posts_id: 7 , comments_id: 17},
        {id: 18, posts_id: 7 , comments_id: 18}
      ]);
    });
};
