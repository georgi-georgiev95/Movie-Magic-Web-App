const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');
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
        res.redirect('movies/create');
    }


})

router.get('/search', async (req, res) => {
    const movies = movieService.getAll();
    res.render('movies/search', { movies });
});

router.post('/search', async (req, res) => {
    const { title, genre, year } = req.body;

    try {
        const movies = await movieService.getAll(title, genre, year);
        res.render('movies/search', { movies });
    } catch (err) {
        console.log(err.message);
        res.redirect('movies/search');
    }

});


router.get('/details/:movieId', async (req, res) => {
    const id = req.params.movieId;

    const movie = await movieService.getOne(id).lean();
    const movieData = ratingHelper(movie);
    res.render('movies/details', { movieData });

});

router.get('/details/:movieId/attach', async (req, res) => {
    const id = req.params.movieId;
    const movie = await movieService.getOne(id).lean();
    const casts = await castService.getAll().lean();
    res.render('movies/attach', { ...movie, casts });
});

router.post('/details/:movieId/attach', async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/details/${movieId}`);
})

module.exports = router;