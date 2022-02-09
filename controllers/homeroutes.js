const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const { checkAuth } = require('../utils/helpers');

router.get('/', async (req, res) =>{
    try{
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = dbPostData.map((e) => 
            e.get({plain: true})
            
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
})

router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard')
        return
    } else res.render('login')
})

router.get('/newPost', (req, res) => {
    if (req.session.loggedIn) {
        res.render('newPost')
        return
    } else res.render('login')
})

router.get('/comments/1', (req, res) => {
    if (req.session.loggedIn) {
        res.render('comment')
        return
    } else res.render('login')
})

router.get('/post/:id', async (req, res)=>{
    const dbPostData = await Post.findOne({
        where: { id: req.params.id },
        include: {
            model: User,
            attributes: ['name'],
        }
    }) 
    // console.log(typeof dbPostData)
    console.log(dbPostData.get())
    let post = dbPostData.get({plain: true});
    console.log(post)
    res.render('post', {
        post
    })
})

module.exports = router;