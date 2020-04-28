
exports.seed = function(knex) {
  return knex('users_comments').delete()
    .then(function () {
      return knex('users_comments').insert([
        { usersId: 7, commentsId: 1},
        { usersId: 7, commentsId: 2},
        { usersId: 6, commentsId: 3},
        { usersId: 6, commentsId: 4},
        { usersId: 6, commentsId: 5},
        { usersId: 5, commentsId: 6},
        { usersId: 5, commentsId: 7},
        { usersId: 5, commentsId: 8},
        { usersId: 4, commentsId: 9},
        { usersId: 4, commentsId: 10},
        { usersId: 4, commentsId: 11},
        { usersId: 3, commentsId: 12},
        { usersId: 3, commentsId: 13},
        { usersId: 3, commentsId: 14},
        { usersId: 2, commentsId: 15},
        { usersId: 2, commentsId: 16},
        { usersId: 1, commentsId: 17},
        { usersId: 1, commentsId: 18}
      ]);
    });
};
