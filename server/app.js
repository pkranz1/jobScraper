const bodyParser = require('body-parser')
const config = require('./utils/config');
const express = require('express');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(middleware.requestLog);

app.use('/api', require('./controllers'));

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


module.exports = app;


