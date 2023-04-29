const router = require('express').Router();
const adminController = require('../controllers/adminController');
// const auth = require('../middlewares/auth');

router.post("/register",adminController.registerAdmin);
router.post("/login",adminController.loginAdmin);
router.get("/companies",adminController.authPass,adminController.companyDetails);
router.get("/job",adminController.authPass,adminController.jobDetails);
router.patch("/verifyCompany",adminController.authPass,adminController.verifyCompany);

module.exports = router