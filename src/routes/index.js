const router = require("express").Router();
const org = require("./org");

router.use("/org",org );

module.exports = router;
