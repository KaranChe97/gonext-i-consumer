const router = require("express").Router();

const { getAll, getStore } = require('../controllers/org'); 

router.get('/:companyId', getStore);
router.get('/', getAll);

module.exports = router;