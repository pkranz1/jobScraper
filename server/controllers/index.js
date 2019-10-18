const router = require('express').Router();

//load controllers from the same directory
const postsRouter = require('./postsRouter');
const scraperRouter = require('./scraperRouter');

//mount each router under a specific route
//prefixes of all the routes defined
router.use('/posts', postsRouter);
router.use('/scraper', scraperRouter);

module.exports = router;