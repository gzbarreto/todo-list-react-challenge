import styles from "./App.module.css"

import { PlusCircle } from "@phosphor-icons/react"


function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src="src\assets\logo.png" />
      </header>

      <form className={styles.newTask}>
        <input placeholder="Adicione uma nova tarefa..."></input>
        <button className={styles.buttonCreate}>
          Criar
          <PlusCircle size={20} />
          </button>
      </form>

      <div>task list</div>
    </div>
  )
}

export default App
