import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import Info from "./Info"
import Tasks from "./Tasks"

const Todo = () => {

  const [tasks, setTasks] = useState([])
  const [tasksText, setTasksText] = useState('')

  const deleteAllTasks = () => {
    const isComfirm = confirm('Are you sure you want to delete all tasks?')
    if(isComfirm) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(({id}) => id !== taskId))
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, isDone} : task))
  }

  const filterTasks = (query) => {
    console.log('Filter tasks', query)
  }

  const addTask = () => {
    if(tasksText.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        label: tasksText,
        isDone: false
      }
      setTasks([...tasks, newTask])
      setTasksText('')
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask}
        tasksText={tasksText}
        setTasksText={setTasksText}
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