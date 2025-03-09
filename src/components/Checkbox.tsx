import { Check } from "@phosphor-icons/react"
import styles from "./Checkbox.module.css"

interface checkboxProps {
  isChecked: boolean
}

export function Checkbox({isChecked} : checkboxProps) {
  return isChecked ? (
    <span className={styles.checkboxChecked}>
      {" "}
      <Check size={12} />{" "}
    </span>
  ) : (
    <span className={styles.checkbox}></span>
  )
}