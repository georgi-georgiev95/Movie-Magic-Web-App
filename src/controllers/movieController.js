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

router.get('/details/:movieId', async (req, res) => {
    const id = req.params.movieId;
    const movie = await movieService.getOne(id).lean(); 
    res.render('movies/details', { movie });
})

module.exports = router;