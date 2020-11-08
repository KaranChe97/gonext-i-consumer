const router = require("express").Router();

const { getAll, addOne } = require('../controllers/customer'); 

// router.get('/:companyId', getStore);
router.get('/', getAll);
router.post('/', addOne);
module.exports = router;