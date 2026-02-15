import { memo } from "react"

const Info = (props) => {
  const { 
    total,
    done,
    onDeleteAllTasks
  } = props

  const hasTasks = total > 0

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">Done {done} from {total}</div>
      {hasTasks && (<button 
      className="todo__delete-all-button" 
      onClick={onDeleteAllTasks}
      type="button">
        Delete all</button>)}
    </div>
  )
}

export default memo(Info)