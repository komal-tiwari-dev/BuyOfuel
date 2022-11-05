import { createContext, useState } from "react";
import axios from "axios"
export const TodoContext=createContext()

export const TodoProvider=({children})=>{
    const [todo,setTodo]=useState([])
    const getTodo=()=>{
        axios.get("http://localhost:8000/getalltodo")
        .then((res)=>{setTodo(res.data)
        console.log("GetTodo",res.data)
        })
        console.log("InnerTodo",todo)
    }
    const addTodo=(data)=>{
        axios.post("http://localhost:8000/addtodo",data)
        .then((res)=>getTodo())
    }
    const updateTodo=(data,id)=>{
        console.log("IDD",id)
        axios.patch(`http://localhost:8000/updatetodo/${id}`,data)
        .then((res)=>getTodo())
    }
    const deleteTodo=(id)=>{
        axios
          .delete(`http://localhost:8000/deletetodo/${id}`).then(res=>getTodo())
    }
    return (
      <TodoContext.Provider value={{ todo,getTodo,addTodo,updateTodo,deleteTodo }}>
        {children}
      </TodoContext.Provider>
    );
}