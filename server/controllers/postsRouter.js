const Post = require('../models/post');
const router= require('express').Router();


router.get('/', async function (req, res, next){
    try {
        const posts = await Post.find({ saved: false });
        res.json(posts.map(post => post.toJSON()));
    } catch(err) {
        next(err);
    }
});

router.get('/saved', async function (req, res, next){
    try {
        const posts = await Post.find({ saved: true });
        res.json(posts.map(post => post.toJSON()));
    } catch(err) {
        next(err);
    }
});

router.put('/:id', async function (req, res, next) {
    const id = req.params.id;
    const post = {
        _saved: true
    };
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
        res.json(updatedPost.toJSON());
    }catch(err) {
        next(err);
    }
});

router.delete('/:id', async function (req, res, next) {
    const id = req.params.id;
    
    try {
        const deletedPost = await Post.findByIdAndRemove(id);
        res.json(deletedPost.toJSON())
    
    } catch (err) {
        next(err);
    }
});

module.exports = router;
