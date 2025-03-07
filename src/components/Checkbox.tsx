import { Check } from "@phosphor-icons/react"
import styles from "./Checkbox.module.css"

export function Checkbox() {
  return (
    <div className={styles.checkbox}>
      <Check />
    </div>
  )
}