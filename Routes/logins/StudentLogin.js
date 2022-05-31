var express = require("express");
var router = express.Router();
var auth = require("../../Controler/auth/StudentAuth");
var { getUser } = require("../../Middleware/User");

router.route("/getStudents").get(auth.getStudents);
router.route("/getOneStudent/:id").get(auth.getOneStudent);


router.route("/register").post(auth.Register);
router.route("/login").post(auth.Login);
router.route("/logout").post(getUser, auth.Logout);
router.route("/:id").delete(auth.Delete)



module.exports = router;
