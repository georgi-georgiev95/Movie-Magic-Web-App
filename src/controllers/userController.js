const router = require('express').Router();

const userService = require('../services/userService');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        await userService.register(userData);
        res.redirect('/');
    } catch (err) {
        throw new Error(err);
    }


})

module.exports = router;