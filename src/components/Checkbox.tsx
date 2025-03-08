import { Check } from "@phosphor-icons/react"
import styles from "./Checkbox.module.css"

interface checkboxProps {
  isChecked: boolean
}

export function Checkbox({isChecked} : checkboxProps) {
  return (
    (isChecked ? <div className={styles.checkboxChecked}>  <Check size={12}/> </div> : <div className={styles.checkbox}></div>)
  )
}