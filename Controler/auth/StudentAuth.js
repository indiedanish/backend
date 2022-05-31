var users = require("../../Models/StudentSchema");
var bcrypt = require("bcrypt");
var { createjwts } = require("../../Utils/JWTs");

module.exports.getStudents = async (req, res)=>{
  try{    
      const student = await users.find({}) 
      console.log("Student",student)
      await res.json(student)
  }
  catch(err){
      await res.json(err)
  }
}

module.exports.Register = async (req, res) => {
  try {
    const { Name, RegNo,  Position,Gender, Email, Password , PhoneNumber, Role, FypStatus, CommitteeRemarks,SupervisorRemarks,OnlineStatus } = req.body;
    console.log("BODY",Gender)
    //console.log( Name, RegNo, Gender,  TeamLead, Email, Password , PhoneNumber, Role, FypStatus, CommitteeRemarks,SupervisorRemarks,OnlineStatus )
    old = await users.findOne({ Email });
    if (old) {
      return await res.status("200").json("already exists");
    }

    //const nullvalue = null;
    // // newPassword = await bcrypt.hash(Password, 12);
    // const newu = await users.create({ Email, Password: newPassword });
    const newu = await users.create({ Name, RegNo,  Position, Gender, Email, Password , PhoneNumber,Role, FypStatus, CommitteeRemarks,SupervisorRemarks,OnlineStatus });
    await res.status("200").json(newu);
  } catch (err) {
    res.status("400").json(err);
  }
};
module.exports.Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await users.findOne({ Email });
    if (!user) return res.status("200").json("user dose not exist");
    // const match = await bcrypt.compare(Password, user.Password);
    if (user.Password!=Password) return res.status("200").json("password dose not exist");
    const AccessTokens = createjwts(user, "Access key", "10s");
    const RefreshTokens = createjwts(user, "Refersh Key", "10m");
    res.cookie("AccessTokens", AccessTokens, {
      MaxAge: 600000,
      httpOnly: true,
    });
    res.cookie("RefreshTokens", RefreshTokens, {
      MaxAge: 600000,
      httpOnly: true,
    });
    const SendData = ["Logged in", user]
    res.status("200").json(SendData);
  } catch (err) {
    res.status("400").json(err);
  }
};
module.exports.Logout = async (req, res) => {
  res.cookie("AccessTokens", "", {
    MaxAge: 0,
    httpOnly: true,
  });
  res.cookie("RefreshTokens", "", {
    MaxAge: 0,
    httpOnly: true,
  });
  res.json("logged out");
};

module.exports.Delete= async (req,res)=>{
  try{    
      const user = await users.deleteOne({_id:req.params.id}) 
      await res.json(task)
  }
  catch(err){
      await res.json(err)
  }
}

module.exports.getOneStudent = async (req,res)=>{
  try{   
    const  id  = req.params.id;
   
 
      const user = await users.find({_id:id}) 

      console.log("after call",user)

      await res.json(user)
  }
  catch(err){
      await res.json(err)
  }
}