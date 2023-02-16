import { useState } from "react";

function AddTodo({onAddTodo}) {
  const [todoText, setTodoText] = useState("");
  return (
    <>
      <h3>Add new todo!</h3>
      <input
        type="text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      ></input>
      <button onClick={()=>{
        onAddTodo(todoText)
      }}>Add!</button>
    </>
  );
}

export default AddTodo;
