var express = require("express");
var router = express.Router();
var Teams = require("../../Controler/teams/TeamControler");

router.route("/add").post(Teams.Add);
router.route("/view").get(Teams.ViewAll);
router.route("/:id").get(Teams.ViewOne).delete(Teams.delete).put(Teams.update);


module.exports = router;
