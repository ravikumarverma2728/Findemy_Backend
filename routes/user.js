const express = require('express')
const { login, signup, logout } = require('../controllers/userController')
// const authenticate = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/logout',  logout)

module.exports = router