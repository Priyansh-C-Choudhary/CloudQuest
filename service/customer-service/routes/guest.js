const express = require('express');
const { requireSignin, addVideoNote, editInfo, issueProblem } = require('../middlewares');
const { viewMyCourses, signup, signin } = require('../controllers/guest');
const router = express.Router();

// POST routes for guest
router.post('/guest/signup', signup);
router.post('/guest/signin', signin);
router.post('/guest/issueProblem', requireSignin, issueProblem);

module.exports = router;
