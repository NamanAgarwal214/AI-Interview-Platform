const router = require('express').Router();
const jobController = require('../controllers/jobController');
const companyController = require('../controllers/companyController');

router.post("/create",companyController.authPass,jobController.createJob);
router.post("/addApplicants",companyController.authPass,jobController.addApplicants);

module.exports = router