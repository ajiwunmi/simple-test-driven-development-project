const {Router} = require('express');
const {
	getUsersController,
	createUserController,
} = require("../controllers/authController");
const router = Router();

// /api/v1/auth/register
router.get('/register', getUsersController);
router.post("/register", createUserController);

module.exports = router;
