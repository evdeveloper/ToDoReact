import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import Info from "./Info"
import Tasks from "./Tasks"
import Button from "./Button"
import { use } from "react"

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

  const tasksTextRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id

  const deleteAllTasks = useCallback(() => {
    const isComfirm = confirm('Are you sure you want to delete all tasks?')
    if(isComfirm) {
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks(tasks.filter(({id}) => id !== taskId))
  }, [tasks])

  const doneTask = useMemo(() => tasks.filter(({isDone}) => isDone).length, [tasks])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, isDone} : task))
  }, [tasks])

  const addTask = useCallback(() => {
    if(tasksText.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        label: tasksText,
        isDone: false
      }
      setTasks((prevTatsks) => [...prevTatsks, newTask])
      setTasksText('')
      setSearchQuery('')
      tasksTextRef.current.focus()
    }
  }, [tasksText])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    tasksTextRef.current.focus()
  }, [])

  
  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()
    return clearSearchQuery.length > 0 ? tasks.filter(({label}) => label.toLowerCase().includes(clearSearchQuery)) : null
  }, [searchQuery, tasks])

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask}
        tasksText={tasksText}
        setTasksText={setTasksText}
        tasksTextRef={tasksTextRef}
      />
      <SearchTaskForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Info 
        total={tasks.length}
        done={doneTask}
        onDeleteAllTasks={deleteAllTasks}
      />
      <Button 
        onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
        >Show first incomplete task
      </Button>
      <Tasks 
        tasks={tasks} 
        onDeleteTask={deleteTask}
        filteredTasks={filteredTasks}
        onTaskCompleteChange={toggleTaskComplete}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
      />
    </div>
  )
}

export default Todo