const router = require('express').Router();
const scraper = require('../services/scraper');


router.get('/', async function(req, res, next) {
  try {
    await scraper();
    res.status(200).send('Scraping Complete');
  } catch(error) {
    console.error(error.message);
    res.status(400).json({ Error: 'Scraping Failed' });
  } finally {
    next();
  }
});


module.exports = router;