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
        <button type="submit" className={styles.buttonCreate}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.taskHeader}>
        <div className={styles.createdTasks}>
          Tarefas criadas  <span>5</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas  <span>2 de 5</span>
        </div>
      </div>

      <div>task list</div>
    </div>
  )
}

export default App
