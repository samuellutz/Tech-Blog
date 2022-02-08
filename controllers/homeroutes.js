const router = require('express').Router();
const { User, Post } = require('../models');
const checkAuth = require('../utils/auth');

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

module.exports = router; 