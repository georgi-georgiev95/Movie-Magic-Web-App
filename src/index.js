const app = require('./config/expressConfig');
const PORT = 3000;


app.listen(PORT, () => `Server is listening on port: ${PORT}`);

