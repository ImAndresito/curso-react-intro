import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1>
      Hai completato <span>{completed}</span> su <span>{total}</span> attività.
    </h1>
  );
}

export { TodoCounter };
