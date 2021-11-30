const router = require("express").Router(); 

const id2 = require("../controller/controllerproduct");
//  const multiMiddleware =require('../middleware/multer.middleware')

router.get("/", id2.pdetails); 
router.get("/", id2.specify); 
router.post("/addproduct", id2.addprod);
router.put("/updateproduct", id2.updateprod);
router.delete("/deleteproduct", id2.deleteprod);

// router.post("/add", multiMiddleware.single('imagefile'), controllerproduct.createProduct);
module.exports = router;
