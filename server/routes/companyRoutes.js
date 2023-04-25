const router = require('express').Router();
const companyController = require('../controllers/companyController');
// const auth = require('../middlewares/auth');

router.post("/register",companyController.registerCompany);
router.post("/login",companyController.loginCompany);
router.get("/verifyMail/:code/:userId",companyController.confirmEmail);

module.exports = router