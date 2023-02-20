//Library import
import { useState, useEffect } from "react";

//Components import
import SearchComponent from "./SearchComponent";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function TodoList() {
  const [initialTodos, setInitialTodos] = useState(null);

  // const [initialTodos, setInitialTodos] =useState( [
  //   { name: "do yoga", completed: false },
  //   { name: "order pizza", completed: false },
  //   { name: "50 push ups", completed: false },
  // ]);

  //all states
  const [todoList, setTodoList] = useState(initialTodos);

  const [searchText, setSearchText] = useState("");

  //effects
  // useEffect(()=>{}, [])
  useEffect(() => {
    console.log(searchText);
    if (initialTodos) {
      const newFilteredList = initialTodos.filter((todo) => {
        return todo.title.toLowerCase().includes(searchText.toLowerCase());
      });

      setTodoList(newFilteredList);
    }
  }, [searchText]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todoListFetch) => {
        console.log(todoListFetch);
        setInitialTodos(todoListFetch);
        setTodoList(todoListFetch);
      });
  }, []);

  //events
  const handleAddTodo = (todoName) => {
    const newTodo = { title: todoName, completed: false };
    setTodoList([...todoList, newTodo]);
  };

  const handleCompleteTodo = (indexTodo) => {
    console.log("e completed", indexTodo);
    const newTodoList = todoList.map((todo, index) => {
      if (index === indexTodo) {
        return { ...todo, completed: true };
      } else {
        return todo;
      }

      // if(index !== indexTodo){
      //   return todo
      // }
      // return{...todo, completed:true}
    });
    setTodoList(newTodoList);
    console.log(newTodoList);
  };

  return (
    <>
      <h1>ToDo List</h1>
      {todoList === null || initialTodos === null ? (
        <h2>Loading</h2>
      ) : (
        <>
          <SearchComponent
            searchText={searchText}
            setSearchText={setSearchText}
          />
          {todoList.map((todo, index) => (
            <TodoItem
              name={todo.title}
              completed={todo.completed}
              key={"todo_" + index}
              onComplete={handleCompleteTodo}
              index={index}
            />
          ))}
          <AddTodo onAddTodo={handleAddTodo} />
        </>
      )}
    </>
  );
}

export default TodoList;
