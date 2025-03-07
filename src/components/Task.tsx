import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "./Checkbox.tsx"
import styles from "./Task.module.css"

export function Task() {
  return (
    <div className={styles.task}>
      <Checkbox />
      <label>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </label>

      <button>
        <Trash size={14} />
      </button>
    </div>
  )
}