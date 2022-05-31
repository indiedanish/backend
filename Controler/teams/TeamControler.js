const Teamdoc = require("../../Models/TeamSchema");
var users = require("../../Models/StudentSchema");

module.exports.Add = async (req, res) => {
  try {
    var { Name, Meeting, Student } =
      req.body;
    console.log("Test");

    // const validUser =  await users.find({ _id: Assign },obj)
    // const AssignStudent = await users.findOne({ _id: Assign });
    // var Completed = false;
    // if (Status == 'Completed') {
    //   Completed = true;
    //   console.log("HELO");
    // }

    // const AssignStudentName = AssignStudent.Name;
    if(Meeting == ""){
      Meeting = "There's no meeting, today"
    }

    const team = await Teamdoc.create({
        Name, Meeting, Student
    });
    console.log("Team", team);
    await res.json(team);
    return await res.status("200").json(" exists");
  } catch (err) {
    await res.json(err);
  }
};
module.exports.ViewAll = async (req, res) => {
  try {
    const task = await Teamdoc.find({});
    console.log("Task", task);
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};
module.exports.ViewOne = async (req, res) => {
  try {
    const task = await Teamdoc.findOne({ _id: req.params.id });
    console.log("Task", task);
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};
module.exports.delete = async (req, res) => {
  try {
    const task = await Teamdoc.deleteOne({ _id: req.params.id });
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};

module.exports.markCompleted = async (req, res) => {
    try {
      const task = await Teamdoc.findOneAndUpdate({ _id: req.params.id }, {Completed: true});
      await res.json(task);
    } catch (err) {
      await res.json(err);
    }
  };
module.exports.update = async (req, res) => {
  try {
    const obj = {
      Title: req.body.Title,
      Desc: req.body.Desc,
      User: req.user._id,
    };
    const task = await Teamdoc.findOneAndUpdate({ _id: req.params.id }, obj);
    console.log("Task", task);
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};
