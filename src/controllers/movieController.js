const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;
    await movieService.create(movieData);
    res.redirect('/');
})

router.get('/search', (req, res) => {
    res.render('movies/search');
});

module.exports = router;