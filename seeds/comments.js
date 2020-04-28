exports.seed = function (knex) {
  return knex("comments")
    .delete()
    .then(function () {
      return knex("comments").insert([
        {

          comment: "This is the first commment on a post",
          date: "2020-01-1 20:16:22",
          post_id: 1,
        },
        { comment: "cool pic", date: "2020-01-10 14:16:25", post_id: 1 },
        {
          id: 3,
          comment: "omg i was just there",
          date: "2020-01-10 17:16:25",
          post_id: 1,
        },
        {
          comment: "your the best",
          date: "2020-01-12 20:16:25",
          post_id: 2,
        },
        {
          comment: "this is so coooollllllll",
          date: "2020-01-22 7:16:25",
          post_id: 2,
        },
        {

          comment: "what is this????",
          date: "2020-01-25 14:16:25",
          post_id: 3,
        },
        {

          comment: "how long where you there",
          date: "2020-01-27 1:16:25",
          post_id: 3,
        },
        {

          comment: "always wanted to go there",
          date: "2020-01-29 4:16:30",
          post_id: 4,
        },
        { comment: "cute", date: "2020-02-02 14:16:25", post_id: 4 },
        {

          comment: "thats my best friend",
          date: "2020-02-02 16:16:16",
          post_id: 4,
        },
        {
          comment: "you go there every year?",
          date: "2020-02-02 12:16:25",
          post_id: 5,
        },
        {
          comment: "why did you not tell me you where going",
          date: "2020-02-10 14:16:25",
          post_id: 6,
        },
        {

          comment: "i wouldve rocked out",
          date: "2020-02-12 10:16:16",
          post_id: 7,
        },
        {
          comment: "looks poppin",
          date: "2020-02-22 14:16:25",
          post_id: 8,
        },
        {
          comment: "you dont pop",
          date: "2020-02-02 2:16:25",
          post_id: 9,
        },
        {

          comment: "your a beast",
          date: "2020-03-02 22:16:25",
          post_id: 10,
        },
        {
          comment: "did you win",
          date: "2020-03-02 14:16:25",
          post_id: 11,
        },
        {
          comment: "make sure you sanitize",
          date: "2020-03-12 6:16:25",
          post_id: 12,
        },
      ]);
    });
};
