const express = require('express');
const router = express.Router();
const Comments = require('./comments-model.js');

router.get('/', (req,res)=> {
    Comments.getComments()
    .then(comments => {
        res.status(200).json(comments)
    })
    .catch(err => {
        res.status(500).json({message: 'unexpected problem with database'})
    })
})

router.get('/:id', (req,res)=> {
    const { id } = req.params;
    Comments.getCommentById(id)
    .then(comment => {
        comment ? res.status(200).json(comment) : res.status(400).json({message: 'comment with that id doesnt exist'})
    })
    .catch(err => {
        res.status(500).json({message: 'unexpected problem with database'})
    })
})

router.post('/', bodyValidation, (req,res)=> {
    res.status(200).json({message: 'commments router up and running'})
})

router.put('/:id', (req,res)=> {
    res.status(200).json({message: 'commments router up and running'})
})

router.delete('/:id', (req,res)=> {
    res.status(200).json({message: 'commments router up and running'})
})

function bodyValidation(req,res,next){  
    req.body.comment && req.body.post_id ? next() : res.status(400).json({message: 'need to add a comment in the body'})
}

module.exports = router;