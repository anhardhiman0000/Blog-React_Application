const MessageCard = require('../models/messageCard.models')

const getMessageCard = async (req, res) => {
    try {
        let card = await MessageCard.find();
        if (card) {
            res.status(200).send(card);
        }
    }
    catch (err) {
        res.status(500).send('Error in Getmessage', err);
    }
};


const createMessageCard = async (req, res) => {
    const messageCardData = req.body

    try {
        let messageCard = new MessageCard(messageCardData)
        let result = messageCard.save();
        if (result) {
            res.status(200).send('Message Is Added');
        }
    }
    catch (err) {
        res.status(500).send('Error in message', err);
    }
};
let specify = async (req, res, next) => {

    try {
        let prod = await MessageCard.findOne({ _id: req.query.id });
        if (prod === null) {
            res.send("id does not exist");
        } else {
            res.send({ success: true, MessageCard: prod });
        }
    } catch (err) {
        console.log({ success: false, message: err.message });
    }
};

const updateMessageCard = async (req, res) => {
    // code here
    try {
        let messageCard = await MessageCard.findOne({ _id: req.query.id });
        if (messageCard === null) {
            res.send("Message Card does not exist");
        }
        else {

            let updateMessage = {
                username: req.body.username,
                title: req.body.title,
                body: req.body.body,
            };
            let result = await MessageCard.updateOne({ _id: req.query.id }, updateMessage);
            res.send({ success: true, MessageCard: { id: req.query.id } });
        }
    } catch (err) {
        console.log({ success: false, message: err.message });
    }
};

const deleteMessageCard = async (request, response, next) => {
    console.log("ID = " + request.query.id);
    let messageCard = await MessageCard.findOne({ _id: request.query.id });
    if (messageCard === null) {
        response.send("Message Card does not exist");
    } else {
        try {
            let result = await MessageCard.deleteOne({ _id: request.query.id });
            response.status(200).json({ success: true, id: request.query.id });
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = { getMessageCard, specify, createMessageCard, updateMessageCard, deleteMessageCard }

