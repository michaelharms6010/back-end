exports.seed = function (knex) {
  return knex("users_comments")
    .del()
    .then(function () {
<<<<<<< HEAD
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
=======
      return knex("users_comments").insert([
        { users_id: 7, comments_id: 1 },
        { users_id: 7, comments_id: 2 },
        { users_id: 6, comments_id: 3 },
        { users_id: 6, comments_id: 4 },
        { users_id: 6, comments_id: 5 },
        { users_id: 5, comments_id: 6 },
        { users_id: 5, comments_id: 7 },
        { users_id: 5, comments_id: 8 },
        { users_id: 4, comments_id: 9 },
        { users_id: 4, comments_id: 10 },
        { users_id: 4, comments_id: 11 },
        { users_id: 3, comments_id: 12 },
        { users_id: 3, comments_id: 13 },
        { users_id: 3, comments_id: 14 },
        { users_id: 2, comments_id: 15 },
        { users_id: 2, comments_id: 16 },
        { users_id: 1, comments_id: 17 },
        { users_id: 1, comments_id: 18 },
>>>>>>> 22c73dbbf656ba5a260427f8903495f08f8fb13c
      ]);
    });
};
