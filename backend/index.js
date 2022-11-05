const { json } = require("express")
const express=require("express")
const connect=require("./config/db")
const todoModel=require("./Model/todomodel")
const app=express()
app.use(json())

app.get("/",(req,res)=>{
    res.send("Home...")
})

app.post("/addtodo",async (req,res)=>{
    const todo=req.body.todo
    
    const addedTodo=new todoModel({todo})
    await addedTodo.save()

    res.send({message:"Todo added Successfully",todo:addedTodo});
})


// tech@buyofuel.com and kavin@buyofuel.com

app.get("/getAllTodo", async (req,res)=>{
    const allTodoData=await todoModel.find()

    res.send(allTodoData)
})

app.delete("/deletetodo/:id",async (req,res)=>{
    const id=req.params.id
    const deletedTodo= await todoModel.findOneAndDelete({_id:id},{new:true})

    res.send({message:"Todo deleted Successfully",data:deletedTodo})
})

app.patch("/updatetodo/:id",async (req,res)=>{
    const {id}=req.params
    console.log(id)
    const updatedTodo= await todoModel.findOneAndUpdate({_id:id},req.body,{new:true})

    res.send({message:"Todo deleted Successfully",data:updatedTodo})
})

app.listen(8000,async ()=>{
    try{
        await connect
        console.log("Database connected successfully")
    }
    catch(err){
        console.log("error in connecting database",err)
    }
    console.log("server is running on port 8000")
})