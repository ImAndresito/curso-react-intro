import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import React, { useState } from 'react';

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
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log(`Gli utenti cercano le attività che riguardano: ${searchValue}`);
  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList style={{ flexGrow: 1 }}>
        {defaultTodos.map(todo => (
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
