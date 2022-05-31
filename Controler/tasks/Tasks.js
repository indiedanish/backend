const Taskdoc=require("../../Models/TaskSchema")
var users = require("../../Models/StudentSchema");




module.exports.Add= async (req,res)=>{
    try {

        const { title, Assign,  Priority,Status, Comments,end, start } = req.body;
        console.log("SS")

        // const validUser =  await users.find({ _id: Assign },obj)

        const AssignStudent = await users.findOne({_id:Assign}) 
        
        console.log(title, Assign,  Priority,Status, Comments,end, start )


        const AssignStudentName = AssignStudent.Name;

            const task = await Taskdoc.create({title, Assign, AssignStudentName, Priority,Status, Comments, end, start }) 
        console.log("Task",task)
        await res.json(task)
          return await res.status("200").json(" exists");
        
      
    
    }
    catch(err){
        await res.json(err)
    }
}
module.exports.ViewAll= async (req,res)=>{
    try{    
        const task = await Taskdoc.find({}) 
        console.log("Task",task)
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}
module.exports.ViewOne= async (req,res)=>{
    try{    
        const task = await Taskdoc.findOne({_id:req.params.id}) 
        console.log("Task",task)
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}
module.exports.delete= async (req,res)=>{
    try{
        console.log("THIS IS DELETE FOR ABDUL: ",req.body)    
        const task = await Taskdoc.deleteOne({_id:req.params.id}) 
        
        await res.json(task)

    }
    catch(err){
        await res.json(err)
    }
}
module.exports.update= async (req,res)=>{
    try{    
        const obj = {
            Title:req.body.Title,
            Desc:req.body.Desc,
            User:req.user._id
        }
        const task = await Taskdoc.findOneAndUpdate({ _id: req.params.id },obj)
        console.log("Task",task)
        await res.json(task)
    }
    catch(err){
        await res.json(err)
    }
}