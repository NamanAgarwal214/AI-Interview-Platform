const router = require('express').Router();
const questionController = require('../controllers/questionConroller');
const auth = require('../controllers/companyController');

router.post("/create",questionController.createQuestion);

module.exports = router