import ListItem from "./ListItem";

export function List(props) {
  return (
    <ul className="list_container">
      {props.tasks.map((tasks) => (
        <ListItem completetasks={props.completetasks} {...tasks} />
      ))}
    </ul>
  );
}
