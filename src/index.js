const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => `Server is listening on port: ${PORT}`);

