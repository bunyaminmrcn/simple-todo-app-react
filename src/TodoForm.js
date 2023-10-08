import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import useInputState from "./hooks/useInputState";
import { TodosContext } from './context/todos.context'
function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  console.log("Todo form Render!");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
