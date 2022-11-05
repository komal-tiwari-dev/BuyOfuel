import { createContext, useState } from "react";
import axios from "axios"
export const TodoContext=createContext()

export const TodoProvider=({children})=>{
    const [todo,setTodo]=useState([])
    const getTodo=()=>{
        axios
          .get("https://warm-tor-91169.herokuapp.com/getalltodo")
          .then((res) => {
            setTodo(res.data);
            console.log("GetTodo", res.data);
          });
        console.log("InnerTodo",todo)
    }
    const addTodo=(data)=>{
        axios
          .post("https://warm-tor-91169.herokuapp.com/addtodo", data)
          .then((res) => getTodo());
    }
    const updateTodo=(data,id)=>{
        console.log("IDD",id)
        axios
          .patch(`https://warm-tor-91169.herokuapp.com/updatetodo/${id}`, data)
          .then((res) => getTodo());
    }
    const deleteTodo=(id)=>{
        axios
          .delete(`https://warm-tor-91169.herokuapp.com/deletetodo/${id}`)
          .then((res) => getTodo());
    }
    return (
      <TodoContext.Provider value={{ todo,getTodo,addTodo,updateTodo,deleteTodo }}>
        {children}
      </TodoContext.Provider>
    );
}