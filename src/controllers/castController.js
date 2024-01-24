const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('casts/create');
});

router.get('/attach', (req, res) => {
    res.render('casts/attach');
})

module.exports = router;