const router = require("express").Router();
const { createEmail } = require("../controllers/email.controller");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/create").post(isAuthenticated, createEmail);
router.route("/:id").delete(isAuthenticated, deleteEmail);
router.route("/getallemails").get(isAuthenticated, getAllEmailById);

export default router;
