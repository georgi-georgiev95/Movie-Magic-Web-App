const app = require('./config/configExpress');
const handlebarsConfig = require('./config/configHandlebars');

const PORT = 3000;

handlebarsConfig(app);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));