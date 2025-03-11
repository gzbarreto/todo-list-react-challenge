import { Trash } from "@phosphor-icons/react"
import { Checkbox } from "./Checkbox.tsx"
import styles from "./Task.module.css"

interface taskProps {
  taskId: number
  isDone: boolean
  content: string
  onTaskDone: (taskId: number) => void
  onTaskDelete: (taskId: number) => void
}
export function Task({ content, isDone, onTaskDone, onTaskDelete, taskId }: taskProps) {

  function handleTaskDone() {
    onTaskDone(taskId)
  }

  function handleTaskDelete() {
    onTaskDelete(taskId)
  }

  return (
    <div className={styles.task}>
      <Checkbox onClick={handleTaskDone} isChecked={isDone} />
      {isDone ? (
        <label className={styles.labelStrikethrough}>{content}</label>
      ) : (
        <label>{content}</label>
      )}

      <button onClick={handleTaskDelete}>
        <Trash size={14} />
      </button>
    </div>
  )
}
