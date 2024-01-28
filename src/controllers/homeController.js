const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/', async (req, res) => {
    const movies = await movieService.getAll().lean();

    res.render('home', { movies });
});

router.get('/search', async (req, res) => {
    const movies = await movieService.search().lean();
    res.render('search', { movies });
});

router.post('/search', async (req, res) => {
    const { title, genre, year } = req.body;

    try {
        // const movies = await movieService.getAll(title, genre, year);
        const movies = await movieService.search(title, genre, year).lean();
        res.render('search', { movies });
    } catch (err) {
        console.log(err.message);
        res.redirect('search');
    }

});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;