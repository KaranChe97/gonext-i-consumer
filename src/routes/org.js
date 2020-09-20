const router = require("express").Router();

const { getAll } = require('../controllers/org'); 

router.get('/', getAll);


module.exports = router;