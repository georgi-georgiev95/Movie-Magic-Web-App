const router = require('express').Router();

const movieService = require('../services/movieService');
const ratingHelper = require('../helpers/ratingHelper');

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

    try {
        await movieService.create(movieData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.status(400).end();
    }

    
})

router.get('/search', async (req, res) => {
    const movies = movieService.getAll();
    res.render('movies/search', {movies});
});

router.post('/search', async (req, res) => {
    const { title, genre, year } = req.body;

    try {
        const movies = await movieService.getAll(title, genre, year);
        res.render('movies/search', { movies });
    } catch (err) {
        console.log(err.message);
        res.status(400).end();
    }
    
});


router.get('/details/:movieId', async (req, res) => {
    const id = req.params.movieId;
    try {
        const movie = await movieService.getOne(id).lean();
        const movieData = ratingHelper(movie);
        res.render('movies/details', { movieData });
    } catch (err) {
        console.log(err.message);
        res.status(400).end();
    }
    
});

module.exports = router;