const bodyParser = require('body-parser')
const config = require('./utils/config');
const cors = require('cors');
const express = require('express');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');
const scraperRouter = require('./controllers/scraperRouter');
const postsRouter = require('./controllers/postsRouter');

const app = express();


 mongoose.connect(config.MONGODB_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
 })
 .then(function(){
     console.log('Connected to MONGODB');
 })
 .catch(function(err){
     console.error(err)
 });


app.use(cors());
app.use(bodyParser.json());

app.use(middleware.requestLog);

app.use('/scrape', scraperRouter);
app.use('/posts', postsRouter);

module.exports = app;


