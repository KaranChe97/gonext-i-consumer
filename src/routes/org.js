const router = require("express").Router();

const { getAll, getStore } = require('../controllers/org'); 

router.get('/', getAll);
router.get('/:companyId', getStore);

module.exports = router;