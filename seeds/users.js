
exports.seed = function(knex) {
  return knex('users').delete()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'username1', password: 'password1' , email: 'email1@email.com' , name: 'john doe', age: 25 , terms: true},
        {id: 2, username: 'username2', password: 'password2' , email: 'email2@email.com' , name: 'johnny doe', age: 35 , terms: true},
        {id: 3, username: 'username3', password: 'password3' , email: 'email3@email.com' , name: 'joeff doe', age: 26 , terms: true},
        {id: 4, username: 'username4', password: 'password4' , email: 'email4@email.com' , name: 'joe doe', age: 75 , terms: true},
        {id: 5, username: 'username5', password: 'password5' , email: 'email5@email.com' , name: 'jason doe', age: 45 , terms: true},
        {id: 6, username: 'username6', password: 'password6' , email: 'email6@email.com' , name: 'nelson doe', age: 15 , terms: true},
        {id: 7, username: 'username7', password: 'password7' , email: 'email7@email.com' , name: 'jose doe', age: 65 , terms: true}
      ]);
    });
};
