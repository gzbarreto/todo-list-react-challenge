import { Check } from "@phosphor-icons/react"
import styles from "./Checkbox.module.css"

interface checkboxProps {
  isChecked: boolean
  onClick: () => void
}

export function Checkbox({isChecked, onClick} : checkboxProps) {


  return isChecked ? (
    <span onClick={onClick} className={styles.checkboxChecked}>
      {" "}
      <Check size={12} />{" "}
    </span>
  ) : (
    <span onClick={onClick} className={styles.checkbox}></span>
  )
}