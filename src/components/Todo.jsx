import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import Info from "./Info"
import Tasks from "./Tasks"

const Todo = () => {

  const tasks = [
    { id: 1, label: 'Task 1', isDone: false },
    { id: 2, label: 'Task 2', isDone: true },
    { id: 3, label: 'Task 3', isDone: false },
    { id: 4, label: 'Task 4', isDone: true },
  ]

  const deleteAllTasks = () => {
    console.log('Delete all tasks')
  }

  const deleteTask = (taskId) => {
    console.log('Delete task', taskId)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log('Toggle task complete', taskId, isDone)
  }

  const filterTasks = (query) => {
    console.log('Filter tasks', query)
  }

  const addTask = () => {
    console.log('Add task')
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask}
      />
      <SearchTaskForm 
        onSearchInput={filterTasks}
      />
      <Info 
        total={tasks.length}
        done={tasks.filter(({isDone}) => isDone).length}
        onDeleteAllTasks={deleteAllTasks}
      />
      <Tasks 
        tasks={tasks} 
        onDeleteTask={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo