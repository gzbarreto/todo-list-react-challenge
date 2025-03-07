import styles from "./App.module.css"

import { PlusCircle } from "@phosphor-icons/react"
import { Task } from "./components/Task"

function App() {
  return (
    // Aplication header and logo
    <div className={styles.app}>
      <header>
        <img src="src\assets\logo.png" />
      </header>

      {/* Add new task input */}
      <form className={styles.newTask}>
        <input placeholder="Adicione uma nova tarefa..."></input>
        <button type="submit" className={styles.buttonCreate}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

{/* Task list header */}
      <div className={styles.taskHeader}>
        <div className={styles.createdTasks}>
          Tarefas criadas <span>5</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas <span>2 de 5</span>
        </div>
      </div>

{/* Task list */}
      <div className={styles.taskList}>
        <Task />
      </div>
    </div>
  )
}

export default App
