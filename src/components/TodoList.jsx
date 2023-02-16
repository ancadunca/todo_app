//Library import
import { useState } from "react";

//Components import
import SearchComponent from "./SearchComponent";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function TodoList() {
  const [todoList, setTodoList] = useState([
    { name: "do yoga", completed: false },
    { name: "order pizza", completed: false },
    { name: "50 push ups", completed: false },
  ]);

  const handleAddTodo = (todoName) => {
    const newTodo = { name: todoName, completed: false };
    setTodoList([...todoList, newTodo]);
  };

  const handleCompleteTodo = (indexTodo) =>{
    // console.log(indexTodo);
    // const newTodoList = todoList.map((todo)=>( 
        
    // ))
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <SearchComponent />
      {todoList.map((todo, index) => (
        <TodoItem
          name={todo.name}
          completed={todo.completed}
          key={"todo_" + index}
          onComplete={handleCompleteTodo}
        index={index}
        />
      ))}
      <AddTodo onAddTodo={handleAddTodo} />
    </>
  );
}

export default TodoList;
