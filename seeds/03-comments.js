exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(function () {
      return knex("comments").insert([
        {
          comment: "This is the first commment on a post",
          date: "2020-01-1 20:16:22",
          postId: 1,
          userId: 5
        },
        { 
          comment: "cool pic", 
          date: "2020-01-10 14:16:25", 
          postId: 1 ,
          userId: 7
        },
        {
          comment: "omg i was just there",
          date: "2020-01-10 17:16:25",
          postId: 1,
          userId: 1
        },
        {
          comment: "your the best",
          date: "2020-01-12 20:16:25",
          postId: 2,
          userId: 7
        },
        {
          comment: "this is so coooollllllll",
          date: "2020-01-22 7:16:25",
          postId: 2,
          userId: 7
        },
        {
          comment: "what is this????",
          date: "2020-01-25 14:16:25",
          postId: 3,
          userId: 1
        },
        {
          comment: "how long where you there",
          date: "2020-01-27 1:16:25",
          postId: 3,
          userId: 6
        },
        {
          comment: "always wanted to go there",
          date: "2020-01-29 4:16:30",
          postId: 4,
          userId: 6
        },
        { 
          comment: "cute", 
          date: "2020-02-02 14:16:25", 
          postId: 4 ,
          userId: 5
        },
        {
          comment: "thats my best friend",
          date: "2020-02-02 16:16:16",
          postId: 4,
          userId: 4
        },
        {
          comment: "you go there every year?",
          date: "2020-02-02 12:16:25",
          postId: 5,
          userId: 3
        },
        {
          comment: "why did you not tell me you where going",
          date: "2020-02-10 14:16:25",
          postId: 6,
          userId: 3
        },
        {
          comment: "i wouldve rocked out",
          date: "2020-02-12 10:16:16",
          postId: 7,
          userId: 3
        },
        {
          comment: "looks poppin",
          date: "2020-02-22 14:16:25",
          postId: 8,
          userId: 2
        },
        {
          comment: "you dont pop",
          date: "2020-02-02 2:16:25",
          postId: 9,
          userId: 2
        },
        {
          comment: "your a beast",
          date: "2020-03-02 22:16:25",
          postId: 10,
          userId: 1
        },
        {
          comment: "did you win",
          date: "2020-03-02 14:16:25",
          postId: 11,
          userId: 1
        },
        {
          comment: "make sure you sanitize",
          date: "2020-03-12 6:16:25",
          postId: 12,
          userId: 1
        },
      ]);
    });
};
