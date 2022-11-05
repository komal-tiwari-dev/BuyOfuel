const mongoose=require("mongoose")

const connect = mongoose.connect(
  "mongodb+srv://masaiDB:komal1234@cluster0.wxbfqza.mongodb.net/todoapp?retryWrites=true&w=majority"
);

module.exports=connect