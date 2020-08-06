import React from "react";

interface TodoProps {
  key: number;
  todo: TodoObj;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

interface TodoObj {
  text: string;
  completed: boolean;
}

export const Todo: React.FC<TodoProps> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  );
};
