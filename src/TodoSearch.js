import { useState } from 'react';
function TodoSearch() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      style={{
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '5px',
        overflow: 'hidden',
        width: 'fit-content',
        margin: 'auto',
      }}
      className={isFocused ? '--focus-accent' : '--no-focus-accent'}
    >
      <button type="submit" style={{ background: '#fff', border: 'none' }}>
        <i className="fa fa-search"></i>
        <input
          type="search"
          placeholder="Cerca..."
          style={{
            border: 'none',
            padding: '5px 0 5px 10px',
            fontSize: '16px',
            outline: 'none',
            flexShrink: 0,
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </button>
    </label>
  );
}

export { TodoSearch };
