const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Traineeschema = new Schema({
    username: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
})
var Trainee = mongoose.model('Authentication', Traineeschema);
module.exports = Trainee;
