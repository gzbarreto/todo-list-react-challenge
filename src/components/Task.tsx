import { Trash } from "@phosphor-icons/react"
import { Checkbox } from "./Checkbox.tsx"
import styles from "./Task.module.css"

interface taskProps {
  key: number
  isDone: boolean
  content: string
}

export function Task({ content, isDone }: taskProps) {
  return (
    <div className={styles.task}>
      <Checkbox isChecked={isDone} />
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
