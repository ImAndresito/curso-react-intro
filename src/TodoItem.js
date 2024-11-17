import './TodoItem.css';
function TodoItem(props) {
  return (
    <li className="todo-item-li">
      <i
        className={`fa-solid fa-square-check ${props.completed && '--active'}`}
      ></i>
      <p className={`${props.completed && '--completed'}`}>{props.text}</p>
      <i className="fa-solid fa-circle-xmark"></i>
    </li>
  );
}
export { TodoItem };
