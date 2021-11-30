const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Productschema = new Schema({ 
    productname: {
        type: String,

    },
    price: {
        type: Number,

    },
    category: {
        type: String,

    },
})
var Trainee = mongoose.model('Products', Productschema);
module.exports = Trainee;
