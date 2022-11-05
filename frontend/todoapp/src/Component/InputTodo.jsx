import { Box, Button, Input } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import React, { useContext, useState } from "react";
import {TodoContext} from "../Context/TodoContext"
const InputTodo = () => {
    const [todo,setTodo]=useState({
        todo:""
    })
    const { addTodo } = useContext(TodoContext);

    const HandelClick=()=>{
        console.log(todo)
        addTodo(todo)
        setTodo({todo:""})
    }
  return (
    <>
      <Box mt="15px" mb="15px" display="flex" gap="10px">
        <Input
          required
          type="text"
          value={todo.todo}
          placeholder="Enter Todo"
          onChange={(e) => setTodo({ todo: e.target.value })}
        />
        <Button
          colorScheme="telegram"
          textAlign="center"
          fontSize="3xl"
          onClick={HandelClick}
        >
          <GrAdd />
        </Button>
      </Box>
    </>
  );
};

export default InputTodo;
