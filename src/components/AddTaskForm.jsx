import Field from "./Field"
import Button from "./Button"

const AddTaskForm = (props) => {
  const { 
    addTask,
    setTasksText,
    tasksText
  } = props

  const onSubmit = (e) => {
    e.preventDefault()
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field 
        className="todo__field" 
        id="add-task" 
        type="text" 
        label="New task title"
        value={tasksText}
        onInput={({target}) => setTasksText(target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddTaskForm