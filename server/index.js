const app = require('./app');
const config = require('./utils/config');
const http = require('http');
const scraper = require('./services/scraper');

const server = http.createServer(app);
scraper();

server.listen(config.PORT || 5000, () => {
    console.log(`Server is listening on port: ${config.PORT}`);
});