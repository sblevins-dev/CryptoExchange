const express = require('express');
const { createUser, loginUser, updateBuyingPower } = require('../controllers/UserController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router()

router.post('/create', createUser)
router.post('/login', loginUser)
router.put('/updateBuyingPower/:id', protect, updateBuyingPower)

module.exports = router;