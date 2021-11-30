const MessageRoutes = require('express').Router();
// const MessageRoutes = express.Router();

const id3 = require('../controller/messageCard.controller')
// const createMessageCard = require('../controller/messageCard.controller')
// const updateMessageCard = require('../controller/messageCard.controller')
// const deleteMessageCard = require('../controller/messageCard.controller')

MessageRoutes.get("/", id3.getMessageCard);
MessageRoutes.get("/spec", id3.specify);
MessageRoutes.post("/create", id3.createMessageCard);
MessageRoutes.put("/update", id3.updateMessageCard);
MessageRoutes.delete("/delete", id3.deleteMessageCard);

module.exports = MessageRoutes;
