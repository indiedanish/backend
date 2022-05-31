const Testdoc = require("../../Models/TestSchema");
var users = require("../../Models/StudentSchema");

module.exports.Add = async (req, res) => {
  try {
    const { Title, Assign, Priority, Status, Comments, DeadlineDate, Date } =
      req.body;
    console.log("Test");

    // const validUser =  await users.find({ _id: Assign },obj)

    const AssignStudent = await users.findOne({ _id: Assign });
    var Completed = false;
    if (Status == 'Completed') {
      Completed = true;
      console.log("HELO");
    }

    const AssignStudentName = AssignStudent.Name;

    const task = await Testdoc.create({
      Title,
      Assign,
      AssignStudentName,
      Priority,
      Status,
      Completed,
      Comments,
      DeadlineDate,
      Date,
    });
    console.log("Task", task);
    await res.json(task);
    return await res.status("200").json(" exists");
  } catch (err) {
    await res.json(err);
  }
};
module.exports.ViewAll = async (req, res) => {
  try {
    const task = await Testdoc.find({});
    console.log("Task", task);
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};
module.exports.ViewOne = async (req, res) => {
  try {
    const task = await Testdoc.findOne({ _id: req.params.id });
    console.log("Task", task);
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};
module.exports.delete = async (req, res) => {
  try {
    const task = await Testdoc.deleteOne({ _id: req.params.id });
    console.log("ABDUK ", req.body )
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};

module.exports.markCompleted = async (req, res) => {
    try {
      const task = await Testdoc.findOneAndUpdate({ _id: req.params.id }, {Completed: true});
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
    const task = await Testdoc.findOneAndUpdate({ _id: req.params.id }, obj);
    console.log("Task", task);
    await res.json(task);
  } catch (err) {
    await res.json(err);
  }
};
