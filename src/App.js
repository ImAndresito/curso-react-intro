import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import React from "react";

const defaultTodos = [
  {
    text: "Tagliare le cipolle",
    completed: true,
  },
  {
    text: "Fare il Corso introduzione a React.js",
    completed: false,
  },
  {
    text: "Piangere con la piangiano",
    completed: false,
  },
  {
    text: "LALALALA",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
