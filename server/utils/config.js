require('dotenv').config();

const PORT = process.env.PORT;
const URL = process.env.URL;
const MONGODB_URL = process.env.MONGODB_URL;
const URL2 = process.env.URL2;


module.exports = {
    PORT,
    URL,
    MONGODB_URL,
    URL2,
}
