const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');
const ratingHelper = require('../helpers/ratingHelper');

const { isAuth } = require('../middlewares/authMiddleware'); 

router.get('/create', isAuth, (req, res) => {
    res.render('movies/create');
});

router.post('/create', isAuth, async (req, res) => {
    const movieData = req.body;

    try {
        await movieService.create(movieData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('movies/create');
    }


})

router.get('/details/:movieId', async (req, res) => {
    const id = req.params.movieId;

    const movie = await movieService.getOne(id).lean();
    const casts = await castService.getByIds(movie.casts).lean();

    const movieData = ratingHelper(movie);
    res.render('movies/details', { movieData, casts });

});

router.get('/details/:movieId/attach', isAuth, async (req, res) => {
    const id = req.params.movieId;
    const movie = await movieService.getOne(id).lean();
    // const casts = await castService.getAll().lean();
    res.render('movies/attach', { ...movie });
});

router.post('/details/:movieId/attach', isAuth, async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/details/${movieId}`);
})

router.get('/edit/:movieId', isAuth, (req, res) => {
    res.render('movies/edit');
})

module.exports = router;