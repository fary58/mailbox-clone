const router = require("express").Router();
const { login, logout, register } = require("../controllers/userController");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
