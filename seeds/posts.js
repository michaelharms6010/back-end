exports.seed = function (knex) {
  return knex("posts")
    .del()
    .then(function () {
<<<<<<< HEAD
      return knex('posts').insert([
        { post: 'https://unsplash.com/photos/KMn4VEeEPR8', caption: 'this is me at he shore', date: '01/01/2020', userId: 1},
        { post: 'https://unsplash.com/photos/MMJx78V7xS8', caption: 'the forrest is awesome', date: '01/11/2020', userId: 1},
        { post: 'https://unsplash.com/photos/ht14f-Hvtcg', caption: 'my new car', date: '01/21/2020', userId: 1},
        { post: 'https://unsplash.com/photos/m1WZS5ye404', caption: 'favorite concert ever', date: '01/01/2020', userId: 2},
        { post: 'https://unsplash.com/photos/SxAXphIPWeg', caption: 'new shoes', date: '01/21/2020', userId: 2},
        { post: 'https://unsplash.com/photos/2loKxdi6Hmo', caption: 'new hat', date: '01/11/2020', userId: 3},
        { post: 'https://unsplash.com/photos/cMG5qjpnsyg', caption: 'out with the gang', date: '01/01/2020', userId: 4},
        { post: 'https://unsplash.com/photos/Za9oagRJNLM', caption: 'working hard', date: '01/07/2020', userId: 5},
        { post: 'https://unsplash.com/photos/auIbTAcSH6E', caption: 'best dinner ever', date: '01/11/2020', userId: 5},
        { post: 'https://unsplash.com/photos/jeiqzOgwwKU', caption: 'my lunch today > your lunch', date: '02/21/2020', userId: 6},
        { post: 'https://unsplash.com/photos/eeTJKC_wz34', caption: 'new bike', date: '02/22/2020', userId: 6},
        { post: 'https://unsplash.com/photos/jEgQpfkHEWY', caption: 'roadtrip', date: '01/21/2020', userId: 7}
=======
      return knex("posts").insert([
        {
          post: "https://unsplash.com/photos/KMn4VEeEPR8",
          caption: "this is me at he shore",
          date: "01/01/2020",
          user_id: 1,
        },
        {
          post: "https://unsplash.com/photos/MMJx78V7xS8",
          caption: "the forrest is awesome",
          date: "01/11/2020",
          user_id: 1,
        },
        {
          post: "https://unsplash.com/photos/ht14f-Hvtcg",
          caption: "my new car",
          date: "01/21/2020",
          user_id: 1,
        },
        {
          post: "https://unsplash.com/photos/m1WZS5ye404",
          caption: "favorite concert ever",
          date: "01/01/2020",
          user_id: 2,
        },
        {
          post: "https://unsplash.com/photos/SxAXphIPWeg",
          caption: "new shoes",
          date: "01/21/2020",
          user_id: 2,
        },
        {
          post: "https://unsplash.com/photos/2loKxdi6Hmo",
          caption: "new hat",
          date: "01/11/2020",
          user_id: 3,
        },
        {
          post: "https://unsplash.com/photos/cMG5qjpnsyg",
          caption: "out with the gang",
          date: "01/01/2020",
          user_id: 4,
        },
        {
          post: "https://unsplash.com/photos/Za9oagRJNLM",
          caption: "working hard",
          date: "01/07/2020",
          user_id: 5,
        },
        {
          post: "https://unsplash.com/photos/auIbTAcSH6E",
          caption: "best dinner ever",
          date: "01/11/2020",
          user_id: 5,
        },
        {
          post: "https://unsplash.com/photos/jeiqzOgwwKU",
          caption: "my lunch today > your lunch",
          date: "02/21/2020",
          user_id: 6,
        },
        {
          post: "https://unsplash.com/photos/eeTJKC_wz34",
          caption: "new bike",
          date: "02/22/2020",
          user_id: 6,
        },
        {
          post: "https://unsplash.com/photos/jEgQpfkHEWY",
          caption: "roadtrip",
          date: "01/21/2020",
          user_id: 7,
        },
>>>>>>> 22c73dbbf656ba5a260427f8903495f08f8fb13c
      ]);
    });
};
