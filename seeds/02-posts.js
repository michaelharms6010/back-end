exports.seed = function (knex) {
  return knex("posts")
    .del()
    .then(function () {
      return knex("posts").insert([
        {
          post:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
          caption: "this is me at he shore",
          date: "01/01/2020",
          userId: 1,
        },
        {
          post:
            "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
          caption: "the forrest is awesome",
          date: "01/11/2020",
          userId: 1,
        },
        {
          post:
            "https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
          caption: "my new car",
          date: "01/21/2020",
          userId: 1,
        },
        {
          post:
            "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          caption: "favorite concert ever",
          date: "01/01/2020",
          userId: 2,
        },
        {
          post:
            "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
          caption: "new shoes",
          date: "01/21/2020",
          userId: 2,
        },
        {
          post:
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          caption: "new hat",
          date: "01/11/2020",
          userId: 3,
        },
        {
          post:
            "https://images.unsplash.com/photo-1532498551838-b7a1cfac622e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          caption: "out with the gang",
          date: "01/01/2020",
          userId: 4,
        },
        {
          post:
            "https://images.unsplash.com/photo-1543525324-9146d43c2a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          caption: "working hard",
          date: "01/07/2020",
          userId: 5,
        },
        {
          post:
            "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1232&q=80",
          caption: "best dinner ever",
          date: "01/11/2020",
          userId: 5,
        },
        {
          post:
            "https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
          caption: "my lunch today > your lunch",
          date: "02/21/2020",
          userId: 6,
        },
        {
          post:
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          caption: "new bike",
          date: "02/22/2020",
          userId: 6,
        },
        {
          post:
            "https://images.unsplash.com/photo-1499062918700-389fa905494e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          caption: "roadtrip",
          date: "01/21/2020",
          userId: 7,
        },
      ]);
    });
};
