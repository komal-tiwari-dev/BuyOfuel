const mongoose=require("mongoose")

const  todoSchema=mongoose.Schema({
    todo:{type:String,require:true}
}) 

const  todoModel=mongoose.model("todoapp",todoSchema)
module.exports=  todoModel;