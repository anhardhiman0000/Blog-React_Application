const product = require("../models/product");
let pdetails = async (req, res, next) => {
    try {
        let prodct = await product.find();
        res.status(200).send({ success: true, prodct });
    } catch (err) {
        console.log(err);
        res.status(400).send({ success: false, message: error.message });
    }
};

let addprod = async (req, res, next) => {

    try {
        const { pname, price, category } = req.body;
        let newprod = new product({
            pname: pname,
            price: price,
            category: category,
        });
        let result = await newprod.save();
        res.send("Product created " + newprod);
    } catch (err) {
        console.log(err);
    }
};
let specify = async (req, res, next) => {

    try {
        let prod = await product.findOne({ _id: req.query.id });
        if (prod === null) {
            res.send("Product does not exist");
        } else {
            res.send({ success: true, product: prod });
        }
    } catch (err) {
        console.log({ success: false, message: err.message });
    }
};
let updateprod = async (req, res, next) => {
    // code here
    try {
        let prod = await product.findOne({ _id: req.query.id });
        if (prod === null) {
            res.send("Product does not exist");
        } else {
        }
        let updateproduct = {
            pname: req.body.pname,
            price: req.body.price,
            category: req.body.category,
        };
        let result = await product.updateOne({ _id: req.query.id }, updateproduct);
        res.send({ success: true, product: { id: req.query.id } });
    } catch (err) {
        console.log({ success: false, message: err.message });
    }
};

let deleteprod = async (request, response, next) => {
    console.log("ID = " + request.query.id);
    let prod = await product.findOne({ _id: request.query.id });
    if (prod === null) {
        response.send("Product does not exist");
    } else {
        try {
            let result = await product.deleteOne({ _id: request.query.id });
            response.status(200).json({ success: true, id: request.query.id });
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = { pdetails, addprod, updateprod, deleteprod, specify };
