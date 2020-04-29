const request = require('supertest');
const server = require('../api/server.js'); 
const db = require('../data/db-config.js');

describe('testing the comments endpoint',()=>{
    beforeEach(async function (){
        await db('users').truncate();
    })
    describe('testing the GET /api/comments enpoint', ()=>{
        it('returns a status of 201', async ()=> {
            await request(server)
            .post('/api/auth/register')
            .send({ 
                username: 'dylan31', 
                password: 'something',
                email: "17thandNY@email.ext",
                name: "dylan Collins",
                age: 30,
                terms: true
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
            await request(server)
            .post('/api/auth/login')
            .send({ username: 'dylan31', password: 'something'})
            .then(res => {
                return request(server)
                .get('/api/comments')
                .set({ Authorization :res.body.token})
                .then((res) => {
                    expect(res.status).toBe(200);
                  })
                })
        })
        it('returns a status of 201', async ()=> {
            await request(server)
            .post('/api/auth/register')
            .send({ 
                username: 'dylan31', 
                password: 'something',
                email: "17thandNY@email.ext",
                name: "dylan Collins",
                age: 30,
                terms: true
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
            await request(server)
            .post('/api/auth/login')
            .send({ username: 'dylan31', password: 'something'})
            .then(res => {
                return request(server)
                .get('/api/comments')
                .set({ Authorization :res.body.token})
                .then((res) => {
                    expect(res.body).toBeTruthy();
                  })
                })
        })
    })
    describe('testing the POST /api/comments endpoints', ()=>{
        it('returns a status of 201', async ()=> {
            await request(server)
            .post('/api/auth/register')
            .send({ 
                username: 'dylan31', 
                password: 'something',
                email: "17thandNY@email.ext",
                name: "dylan Collins",
                age: 30,
                terms: true
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
            await request(server)
            .post('/api/auth/login')
            .send({ username: 'dylan31', password: 'something'})
            .then(res => {
                return request(server)
                .post('/api/posts')
                .set({ Authorization :res.body.token})
                .send({ post: 'adding a post', caption: 'this is a caption' ,userId: 1})
                .then((res2) => {
                    return request(server)
                    .post('/api/comments')
                    .set({ Authorization :res.body.token})
                    .send({ comment: 'adding a comment',postId: 1})
                    .then((res) => {
                    expect(res.status).toBe(201);
                  })
                  })
                })
        })
    })
})