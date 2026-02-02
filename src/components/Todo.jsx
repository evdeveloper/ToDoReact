import { useState, useEffect } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import Info from "./Info"
import Tasks from "./Tasks"

const Todo = () => {

  const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem('tasks')
    if(tasks) {
      return JSON.parse(tasks)
    }
    return []
  })
  const [tasksText, setTasksText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

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

  const addTask = () => {
    if(tasksText.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        label: tasksText,
        isDone: false
      }
      setTasks([...tasks, newTask])
      setTasksText('')
      setSearchQuery('')
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSearchQuery.length > 0 ? tasks.filter(({label}) => label.toLowerCase().includes(clearSearchQuery)) : null


  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask}
        tasksText={tasksText}
        setTasksText={setTasksText}
      />
      <SearchTaskForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Info 
        total={tasks.length}
        done={tasks.filter(({isDone}) => isDone).length}
        onDeleteAllTasks={deleteAllTasks}
      />
      <Tasks 
        tasks={tasks} 
        onDeleteTask={deleteTask}
        filteredTasks={filteredTasks}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo