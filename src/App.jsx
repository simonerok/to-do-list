import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, settasks] = useState([
    {
      tasks: "handleseddel",
      completed: false,
      id: 1,
    },
    {
      tasks: "Vasketøj",
      completed: false,
      id: 2,
    },
    {
      tasks: "Lav ansøgninger",
      completed: false,
      id: 3,
    },
  ]);

  function addtasks(tasksName) {
    console.log(tasksName);
    const newtasks = {
      tasks: tasksName,
      completed: false,
      /* the extension uuid creates a random id for the list element */
      id: uuidv4(),
    };
    //add it to state (concat also creates a new obj/array)
    settasks((oldtasks) => oldtasks.concat(newtasks));
  }

  /* ! tjekker hvor alt der er forskelligt fra det id vi undersøger og filtrere det fra */
  function completetasks(id) {
    settasks((oldState) => oldState.filter((tasks) => tasks.id !== id));
  }

  return (
    <div className="App">
      <Form addtasks={addtasks} />
      <List tasks={tasks} completetasks={completetasks} />
    </div>
  );
}

export default App;
