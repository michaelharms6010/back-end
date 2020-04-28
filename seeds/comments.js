exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(function () {
      return knex("comments").insert([
        {
          id: 1,
          comment: "This is the first commment on a post",
          date: "2020-01-1 20:16:22",
          post_id: 1,
        },
        { id: 2, comment: "cool pic", date: "2020-01-10 14:16:25", post_id: 1 },
        {
          id: 3,
          comment: "omg i was just there",
          date: "2020-01-10 17:16:25",
          post_id: 1,
        },
        {
          id: 4,
          comment: "your the best",
          date: "2020-01-12 20:16:25",
          post_id: 2,
        },
        {
          id: 5,
          comment: "this is so coooollllllll",
          date: "2020-01-22 7:16:25",
          post_id: 2,
        },
        {
          id: 6,
          comment: "what is this????",
          date: "2020-01-25 14:16:25",
          post_id: 3,
        },
        {
          id: 7,
          comment: "how long where you there",
          date: "2020-01-27 1:16:25",
          post_id: 3,
        },
        {
          id: 8,
          comment: "always wanted to go there",
          date: "2020-01-29 4:16:30",
          post_id: 4,
        },
        { id: 9, comment: "cute", date: "2020-02-02 14:16:25", post_id: 4 },
        {
          id: 10,
          comment: "thats my best friend",
          date: "2020-02-02 16:16:16",
          post_id: 4,
        },
        {
          id: 11,
          comment: "you go there every year?",
          date: "2020-02-02 12:16:25",
          post_id: 5,
        },
        {
          id: 12,
          comment: "why did you not tell me you where going",
          date: "2020-02-10 14:16:25",
          post_id: 6,
        },
        {
          id: 13,
          comment: "i wouldve rocked out",
          date: "2020-02-12 10:16:16",
          post_id: 7,
        },
        {
          id: 14,
          comment: "looks poppin",
          date: "2020-02-22 14:16:25",
          post_id: 8,
        },
        {
          id: 15,
          comment: "you dont pop",
          date: "2020-02-02 2:16:25",
          post_id: 9,
        },
        {
          id: 16,
          comment: "your a beast",
          date: "2020-03-02 22:16:25",
          post_id: 10,
        },
        {
          id: 17,
          comment: "did you win",
          date: "2020-03-02 14:16:25",
          post_id: 11,
        },
        {
          id: 18,
          comment: "make sure you sanitize",
          date: "2020-03-12 6:16:25",
          post_id: 12,
        },
      ]);
    });
};
