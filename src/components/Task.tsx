import { Trash } from "@phosphor-icons/react"
import { Checkbox } from "./Checkbox.tsx"
import styles from "./Task.module.css"

interface taskProps {
  taskId: number
  isDone: boolean
  content: string
  onTaskDone: (key: number) => void
}
export function Task({ content, isDone, onTaskDone, taskId }: taskProps) {

  function handleTaskDone() {
    onTaskDone(taskId)
  }

  return (
    <div className={styles.task}>
      <Checkbox onClick={handleTaskDone} isChecked={isDone} />
      {isDone ? (
        <label className={styles.labelStrikethrough}>{content}</label>
      ) : (
        <label>{content}</label>
      )}

      <button>
        <Trash size={14} />
      </button>
    </div>
  )
}
