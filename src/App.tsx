import React, { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

interface Props {}

const App: React.FC<Props> = () => {
  const [todos, setTodos] = useState([
    {
      text: "todo 1",
      completed: false,
    },
    {
      text: "todo 2",
      completed: false,
    },
    {
      text: "todo 3",
      completed: false,
    },
  ]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text: text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
