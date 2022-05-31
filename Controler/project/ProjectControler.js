



var users = require("../../Models/ProjectSchema");
var bcrypt = require("bcrypt");
var { createjwts } = require("../../Utils/JWTs");



module.exports.AddProject= async (req,res)=>{
    try {
      const { Title, Description,  Team,Supervisor, Files, CreatedDate , Marks } = req.body;
      console.log("BODY",Gender)
      old = await users.findOne({ Email });
      if (old) {
        return await res.status("200").json("already exists");
      }
  
      //const nullvalue = null;
      // // newPassword = await bcrypt.hash(Password, 12);
      // const newu = await users.create({ Email, Password: newPassword });
      const newu = await users.create({ Title, Description,  Team,Supervisor, Files, CreatedDate , Marks  });
      await res.status("200").json(newu);
    } catch (err) {
      res.status("400").json(err);
    }
  }
  
  