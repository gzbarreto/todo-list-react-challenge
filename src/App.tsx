import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src="src\assets\logo.png" />
      </header>

      <form>
        <input placeholder="Adicione uma nova tarefa..."></input>
        <button>
          Criar
          {/* TODO: ADD ICON */}
          </button>
      </form>

      <div>task list</div>
    </div>
  )
}

export default App
