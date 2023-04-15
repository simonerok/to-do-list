function ListItem(props) {
  return (
    <li className="some_task">
      <p>{props.tasks}</p>
      <button onClick={() => props.completetasks(props.id)}>Complete</button>
    </li>
  );
}
export default ListItem;
