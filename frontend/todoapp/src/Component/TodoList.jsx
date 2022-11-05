import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const TodoList = () => {
    const [newtodo,setNewTodo]=useState({
        todo:""
    })
    const { getTodo,updateTodo,deleteTodo, todo } = useContext(TodoContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    getTodo();
  }, []);

  const handelDel=(el)=>{
    deleteTodo(el._id)
  }
  const handelEdit=(el)=>{
    console.log(newtodo,el)
    updateTodo(newtodo,el._id)
    onClose()
  }
  return (
    <div>
      {todo.length > 0 &&
        todo.map((el) => (
          <Box
            key={el._id}
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            background="gray.100"
            borderRadius="4px"
            mt="5px"
            p="5px"
          >
            <Text fontSize="xl">{el.todo}</Text>
            <Box>
              <Button onClick={onOpen} mr="5px" colorScheme="green">
                <FiEdit />
              </Button>
              <Button onClick={() => handelDel(el)} colorScheme="red">
                <MdDelete />
              </Button>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Todo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input
                    type="text"
                    placeholder="Edit todo"
                    onChange={(e) => setNewTodo({ todo: e.target.value })}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => handelEdit(el)}
                  >
                    Edit
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        ))}
    </div>
  );
};

export default TodoList;
