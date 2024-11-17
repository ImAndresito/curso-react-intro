import './TodoSearch.css';
import { useState } from 'react';

function TodoSearch() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  console.log(`Gli utenti cercano le attività che riguardano: ${searchValue}`);
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
          value={searchValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </button>
    </label>
  );
}

export { TodoSearch };
