import { Box, Center, Heading, Input } from "@chakra-ui/react";
import "./App.css";
import InputTodo from "./Component/InputTodo";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <div className="App">
      <Center>
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          p="10px"
          mt="100px"
          borderRadius="5px"
          w="450px"
          background="white"
        >
          <Heading>Todo App</Heading>
          <InputTodo />
          <TodoList />
        </Box>
      </Center>
    </div>
  );
}

export default App;
