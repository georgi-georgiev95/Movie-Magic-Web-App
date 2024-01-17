const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', (req, res) => {
    const movieData = req.body;
    console.log(movieData);
    res.redirect('/');
})

router.get('/search', (req, res) => {
    res.render('movies/search');
});

module.exports = router;