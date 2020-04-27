
exports.seed = function(knex) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        {id: 1, comment: 'This is the first commment on a post', date: '01/10/2020' , post_id: 1},
        {id: 2, comment: 'cool pic', date: '01/10/2020', post_id: 1},
        {id: 3, comment: 'omg i was just there', date: '01/10/2020', post_id: 1},
        {id: 4, comment: 'your the best', date: '01/12/2012', post_id: 2},
        {id: 5, comment: 'this is so coooollllllll', date: '01/22/2020', post_id: 2},
        {id: 6, comment: 'what is this????', date: '01/24/2020', post_id: 3},
        {id: 7, comment: 'how long where you there', date: '01/27/2020', post_id: 3},
        {id: 8, comment: 'always wanted to go there', date: '01/27/2020', post_id: 4},
        {id: 9, comment: 'cute', date: '02/2/2020', post_id: 4},
        {id: 10, comment: 'thats my best friend', date: '02/2/2020', post_id: 4},
        {id: 11, comment: 'you go there every year?', date: '02/2/2020', post_id: 5},
        {id: 12, comment: 'why did you not tell me you where going', date: '02/10/2020', post_id: 6},
        {id: 13, comment: 'i wouldve rocked out', date: '02/12/2020', post_id: 7},
        {id: 14, comment: 'looks poppin', date: '02/22/2012', post_id: 8},
        {id: 15, comment: 'you dont pop', date: '02/29/2020', post_id: 9},
        {id: 16, comment: 'your a beast', date: '03/1/2020', post_id: 10},
        {id: 17, comment: 'did you win', date: '03/10/2020', post_id: 11},
        {id: 18, comment: 'make sure you sanitize', date: '03/12/2020', post_id: 12}
      ]);
    });
};
