
exports.seed = function(knex) {

      return knex('users_comments').insert([
        {id: 1, users_id: 7, comments_id: 1},
        {id: 2, users_id: 7, comments_id: 2},
        {id: 3, users_id: 6, comments_id: 3},
        {id: 4, users_id: 6, comments_id: 4},
        {id: 5, users_id: 6, comments_id: 5},
        {id: 6, users_id: 5, comments_id: 6},
        {id: 7, users_id: 5, comments_id: 7},
        {id: 8, users_id: 5, comments_id: 8},
        {id: 9, users_id: 4, comments_id: 9},
        {id: 10, users_id: 4, comments_id: 10},
        {id: 11, users_id: 4, comments_id: 11},
        {id: 12, users_id: 3, comments_id: 12},
        {id: 13, users_id: 3, comments_id: 13},
        {id: 14, users_id: 3, comments_id: 14},
        {id: 15, users_id: 2, comments_id: 15},
        {id: 16, users_id: 2, comments_id: 16},
        {id: 17, users_id: 1, comments_id: 17},
        {id: 18, users_id: 1, comments_id: 18}
      ]);

};
