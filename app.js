var express = require("express");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var cors = require("cors");

var teacherlogin = require("./Routes/logins/TeacherLogin");
var studentlogin = require("./Routes/logins/StudentLogin");
var coordinatorlogin = require("./Routes/logins/CoordinatorLogin");

var user = require("./Routes/logins/User");
var task = require("./Routes/tasks/Tasks");
var test = require("./Routes/tests/Tests");
var team = require("./Routes/teams/Teams");


var project = require("./Routes/project/ProjectRoutes");


var { getUser } = require("./Middleware/User");

var app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/teacher", teacherlogin);
app.use("/student", studentlogin);
app.use("/student/project", project);
app.use("/coordinator", coordinatorlogin);

app.use("/team", team);

app.use("/user", user);
app.use("/task", getUser, task);
app.use("/test", getUser, test);

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TaskManager");
    app.listen(process.env.PORT || 4000, () =>
      console.log("Listening on port 4000")
    );
  } catch (error) {
    console.log(error);
  }
};

start();
