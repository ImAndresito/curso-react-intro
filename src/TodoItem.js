import './TodoItem.css';
function TodoItem(props) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#1b1c21',
        margin: '15px 0',
        padding: '0 15px',
        borderRadius: '10px',
        fontSize: '17px',
      }}
    >
      <i
        className={`fa-solid fa-square-check ${props.completed && '--active'}`}
      ></i>
      <p className={`${props.completed && '--completed'}`}>{props.text}</p>
      <i className="fa-solid fa-circle-xmark"></i>
    </li>
  );
}
export { TodoItem };
