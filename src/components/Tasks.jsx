import Task from "./Task"
const Tasks = (props) => {
  const { 
    tasks = [], 
    filteredTasks,
    onDeleteTask,
    onTaskCompleteChange,
  } = props

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if(!hasTasks) {
    return <div className="todo__empty-message">There are no tasks</div>
  }

  if(isEmptyFilteredTasks && hasTasks) {
    return <div className="todo__empty-message">No tasks found</div>
  }


  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map(task => (
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