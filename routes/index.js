const express = require('express');
const router = express.Router();

const AuthRouter = require('./auth')
const QuestionsRouter = require('./questions')

router.use('/auth', AuthRouter)
router.use('/questions', QuestionsRouter)



module.exports = router;