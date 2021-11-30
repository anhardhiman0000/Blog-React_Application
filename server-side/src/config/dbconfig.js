const dotenv = require('dotenv');
dotenv.config();
const db = {
    connection_url: process.env.connection_url
}
module.exports = db;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/evaluation', { useNewurlParser: true });
// const connection = mongoose.connection;
// connection.once('open', function () {
//     console.log('connection is done');
// })
// module.exports = connection
