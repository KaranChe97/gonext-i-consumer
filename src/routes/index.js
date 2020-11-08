const router = require("express").Router();
const org = require("./org");
const customer = require('./customer')
const cart = require('./cart');

router.use("/org",org );
router.use("/cart", cart);
router.use("/customer",customer );



module.exports = router;
