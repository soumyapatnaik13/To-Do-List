const model= require("..Model/model")

exports.createList= async (req,res)=>{ //post(/)
   try{
   const task= await model.create(req.body);
   res.json(task).status(202)
   }catch(err){
    res.json({
        message:"not found"
    }).status(404)
   }
}

//read all the tasks 
exports.readAllTheTask = async(req,res)=>{
    try{
      const task= model.find();
      res.json({
        list:task
      }).send(201)
    }catch(err){
        res.send("not found").status(404)
    }
}

exports.compleAllThetask= async(req,res)=>{
    try{
       const task= await model.findById(req.params.id)
       if(!task){
        res.send("sorry your task has not been stored")
       }
       task.completed=true;
       task.save();
       res.send("succesfully updated")
    }catch(err){
        res.send("not found").status(501)
    }
}

//update
exports.updateTask= async(req,res)=>{
    try{
       const task= await model.findByIdAndUpdate(req.params.id,req.body)
       if(!task){
        res.send("sorry your task has not been stored")
       }
       res.send("succesfully updated")
    }catch(err){
        res.send("not found").status(501)
    }
}

exports.deleteTask = async(req,res)=>{
    try{
       const task= await model.findByIdAndDelete(req.params.id)
       if(!task){
        res.send("sorry your task has not been stored")
       }
       res.send("succesfully updated")
    }catch(err){
        res.send("not found").status(501)
    }
}


