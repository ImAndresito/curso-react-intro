import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1>
      Hai completato <span>{completed}</span> di <span>{total}</span> TODO
    </h1>
  );
}

export { TodoCounter };
