import { useState } from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      className={[
        `todo-search-label ${
          isFocused ? '--focus-accent' : '--no-focus-accent'
        }`,
      ]}
    >
      <button type="submit" style={{ background: '#fff', border: 'none' }}>
        <i className="fa fa-search"></i>
        <input
          className="todo-search-input"
          type="search"
          placeholder="Cerca attività..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => {
            console.log('Hai scritto nel TodoSearch');
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);
          }}
        />
      </button>
    </label>
  );
}

export { TodoSearch };
