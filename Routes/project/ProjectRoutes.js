var express = require("express");
var router = express.Router();
var project = require("../../Controler/project/ProjectControler");
// var { getUser } = require("../../Middleware/User");


router.route("/addProject").post(project.AddProject)


module.exports = router;
