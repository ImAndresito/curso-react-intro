import './TodoItem.css';
function TodoItem(props) {
  return (
    <li className="todo-item-li">
      <i
        className={`fa-solid fa-square-check ${props.completed && '--active'}`}
        onClick={props.onComplete}
      ></i>
      <p className={`${props.completed && '--completed'}`}>{props.text}</p>
      <i className="fa-solid fa-circle-xmark" onClick={props.onDelete}></i>
    </li>
  );
}
export { TodoItem };
