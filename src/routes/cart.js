const router = require("express").Router();
const { getAll, getOne, deleteOne, create  } = require('../controllers/cart');

router.get('/', getAll);
router.post('/', create);
router.get('/:customerId', getOne);
router.delete('/:customerId', deleteOne)

module.exports = router;
