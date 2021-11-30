const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    userId: {
        type: Number
    },
    id: {
        type: Number
    },
    title: {
        type: String
    },
    body: {
        type: String
    },
    username: {
        type: String
    },
    picture: {
        type: String
    },
    // createDate: {
    //     type: Date()
    // }

})
let Message = mongoose.model('Message Cards ', cardSchema)
module.exports = Message;

    // userId: '',
    // id: '',
    // title: '',
    // body: '',
    // picture: '',
    // username: 'Anhar Dhiman',
    // categories: 'All',
    // createdDate: new Date()