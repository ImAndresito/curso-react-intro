import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import './App.css';

const defaultTodos = [
  {
    text: 'Tagliare le cipolle',
    completed: true,
  },
  {
    text: 'Fare il Corso introduzione a React.js',
    completed: false,
  },
  {
    text: 'Piangere con la piangiano',
    completed: false,
  },
  {
    text: 'LALALALA',
    completed: true,
  },
  {
    text: 'LELELELE',
    completed: false,
  },
  {
    text: 'LILILILI',
    completed: false,
  },
  {
    text: 'LOLOLOLO',
    completed: false,
  },
  {
    text: 'LULULULU',
    completed: true,
  },
];

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList style={{ flexGrow: 1 }}>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
