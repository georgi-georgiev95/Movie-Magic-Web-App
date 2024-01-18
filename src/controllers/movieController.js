const router = require('express').Router();

const movieService = require('../services/movieService');
const ratingHelper = require('../helpers/ratingHelper');

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;
    await movieService.create(movieData);
    res.redirect('/');
})

router.get('/search', async (req, res) => {
    const movies = movieService.getAll();
    res.render('movies/search', {movies});
});

router.post('/search', async (req, res) => {
    const { title, genre, year } = req.body;
    const movies = await movieService.getAll(title, genre, year);
    res.render('movies/search', { movies });
});


router.get('/details/:movieId', async (req, res) => {
    const id = req.params.movieId;
    const movie = await movieService.getOne(id).lean();
    const movieData = ratingHelper(movie);
    res.render('movies/details', { movieData });
});

module.exports = router;