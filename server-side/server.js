const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4500
const db = require('./src/config/dbconfig');

// const port = 3000;
// const mongodera = require("./src/config/dbconfig");
// mongodera;

//Middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const MessageRoutes = require('./src/routes/messageCard.route');
const user = require("./src/routes/routesuser");
const product = require("./src/routes/rotesproduct");

app.use('/message', MessageRoutes);
app.use("/user", user);
app.use("/product", product);


//DB Connectiopn
try {
    mongoose.connect(db.connection_url)
    console.log("Mongoose connected with mongoDB atlas");
}
catch (err) {
    console.log("Error is: ", err)
}
app.listen(port, () => console.log(`Example app listening on port: ${port}!`));
