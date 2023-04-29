const router = require('express').Router();
const applicantController = require('../controllers/applicantController');


router.post("/login",applicantController.loginApplicant);
router.post("/editProfile",applicantController.authPass,applicantController.editProfile);
router.post("/startQuiz",applicantController.authPass,applicantController.startQuiz);
router.post("/submitVideo",applicantController.authPass,applicantController.submitVideo);
router.post("/evaluateScore",applicantController.evaluateScore);

module.exports = router