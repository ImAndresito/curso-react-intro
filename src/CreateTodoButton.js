import './CreateTodoButton.css';
import { useState } from 'react';

function CreateTodoButton() {
  const [clickColor, setClickColor] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      className={[
        `todo-create-label ${
          isFocused ? '--focus-primary' : '--no-focus-primary'
        }`,
      ]}
    >
      <input
        className="todo-create-input"
        placeholder="Crea una nuova attività..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        className="create-todo-btn"
        style={{
          background: clickColor,
        }}
        onClick={(event) => {
          console.log('Hai cliccato');
          console.log(event);
          console.log(event.target);
          setClickColor('var(--success)');
          setTimeout(() => {
            setClickColor('');
          }, 700);
        }}
      >
        +
      </button>
    </label>
  );
}

export { CreateTodoButton };
