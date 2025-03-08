import { Trash } from "@phosphor-icons/react"
import { Checkbox } from "./Checkbox.tsx"
import styles from "./Task.module.css"

interface taskProps {
  isDone: boolean
}

export function Task({ isDone }: taskProps) {
  return (
    <div className={styles.task}>
      <Checkbox isChecked={isDone} />
      {isDone ? (
        <label className={styles.labelStrikethrough}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
      ) : (
        <label>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
      )}

      <button>
        <Trash size={14} />
      </button>
    </div>
  )
}
