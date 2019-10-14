const app = require('./app');
const config = require('./utils/config');
const http = require('http');

const server = http.createServer(app);

server.listen(config.PORT || 5000, () => {
    console.log(`Server is listening on port: ${config.PORT}`);
});