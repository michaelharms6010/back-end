exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "username1",
          password: "password1",
          email: "email1@email.com",
          name: "john doe",
          age: 25,
          terms: true,
        },
        {
          username: "username2",
          password: "password2",
          email: "email2@email.com",
          name: "johnny doe",
          age: 35,
          terms: true,
        },
        {
          username: "username3",
          password: "password3",
          email: "email3@email.com",
          name: "joeff doe",
          age: 26,
          terms: true,
        },
        {
          username: "username4",
          password: "password4",
          email: "email4@email.com",
          name: "joe doe",
          age: 75,
          terms: true,
        },
        {
          username: "username5",
          password: "password5",
          email: "email5@email.com",
          name: "jason doe",
          age: 45,
          terms: true,
        },
        {
          username: "username6",
          password: "password6",
          email: "email6@email.com",
          name: "nelson doe",
          age: 15,
          terms: true,
        },
        {
          username: "username7",
          password: "password7",
          email: "email7@email.com",
          name: "jose doe",
          age: 65,
          terms: true,
        },
      ]);
    });
};
