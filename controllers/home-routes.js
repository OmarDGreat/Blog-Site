const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// GET all posts for homepage
router.get('/', (req, res) => {
    console.log(req.session);
    
    Post.findAll({
        attributes: [
        'id',
        'content',
        'title',
        'created_at'        ],
        include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
            model: User,
            attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

// GET login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
    });

// GET signup
router.get('/signup', (req, res) => {
    res.render('signup');
    });

    
module.exports = router;