const router = require('express').Router();
const jobController = require('../controllers/jobController');
const auth = require('../controllers/companyController');

router.post("/create",jobController.createJob);

module.exports = router