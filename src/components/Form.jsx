export function Form(props) {
  function submit(e) {
    e.preventDefault();
    console.log(e.target.elements.task.value);
    props.addtasks(e.target.elements.task.value);
    /* cleans the taskfield when a task is added */
    e.target.elements.task.value = "";
    //completed: false, generated by app
    //task: form
    //id: generated by app
  }

  return (
    <section>
      <h1>To Do List</h1>
      <form className="input_field" onSubmit={submit}>
        <button>Add task</button>
        <input type="text" name="task" id="textbox" />
      </form>
    </section>
  );
}
