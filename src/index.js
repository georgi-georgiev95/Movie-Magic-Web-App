const app = require('./config/expressConfig');
const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => `Server is listening on port: ${PORT}`);

