import Task from "./Task"
const Tasks = (props) => {
  const hasTasks = true

  const { 
    tasks = [], 
    onDeleteTask,
    onTaskCompleteChange,
  } = props

  if(!hasTasks) {
    return <div className="todo__empty-message"></div>
  }
  return (
    <ul className="todo__list">
      {tasks.map(task => (
        <Task 
          className="todo__item"
          onDeleteTask={onDeleteTask}
          onTaskCompleteChange={onTaskCompleteChange}
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default Tasks