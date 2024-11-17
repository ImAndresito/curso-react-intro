import './CreateTodoButton.css';
import { useState } from 'react';

function CreateTodoButton() {
  const [clickColor, setClickColor] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      style={{
        display: 'flex',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '20px',
      }}
      className={isFocused ? '--focus-primary' : '--no-focus-primary'}
    >
      <input
        style={{
          width: '100%',
          paddingLeft: '10px',
          fontSize: '16px',
          border: 'none',
          outline: 'none',
        }}
        placeholder="Crea una nuova attività..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        className="create-todo-btn"
        style={{
          background: clickColor,
        }}
        onClick={() => {
          setClickColor('var(--success)');
          setTimeout(() => {
            setClickColor('');
          }, 500);
        }}
      >
        +
      </button>
    </label>
  );
}

export { CreateTodoButton };
