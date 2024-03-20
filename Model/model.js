const mongoose = require("mongoose");

//define schema for To-do list
const schema = new mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    Description:String,
    DeadLine:Date,
    Completed:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const model= mongoose.model("doList",schema);
module.exports=model;