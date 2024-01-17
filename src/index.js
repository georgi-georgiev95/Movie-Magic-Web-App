const app = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const PORT = 3000;

handlebarsConfig(app);

app.listen(PORT, () => `Server is listening on port: ${PORT}`)