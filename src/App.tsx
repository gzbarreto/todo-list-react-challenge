import styles from "./App.module.css"

import { PlusCircle } from "@phosphor-icons/react"
import { Task } from "./components/Task"
import { ChangeEvent, FormEvent, useState } from "react"

function App() {
  const [nextId, setNextId] = useState(1)
  const [newTaskContent, setNewTaskContent] = useState("")
  const [tasks, setTasks] = useState<
    { id: number; content: string; isDone: boolean }[]
  >([])

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewTaskContent(event.target.value)
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([
      ...tasks,
      {
        id: nextId,
        content: newTaskContent,
        isDone: false,
      },
    ])

    setNewTaskContent("")
    setNextId(nextId + 1)
  }

  function handleTaskDone(taskId: number) {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    ))
  }

  return (
    // Aplication header and logo
    <div className={styles.app}>
      <header>
        <img src="src\assets\logo.png" />
      </header>

      {/* Add new task input */}
      <form onSubmit={handleNewTask} className={styles.newTask}>
        <input
          value={newTaskContent}
          required
          onChange={handleNewTaskChange}
          placeholder="Adicione uma nova tarefa..."
        ></input>
        <button type="submit" className={styles.buttonCreate}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      {/* Task list header */}
      <div className={styles.taskHeader}>
        <div className={styles.createdTasks}>
          Tarefas criadas <span>{tasks.length}</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas{" "}
          <span>
            {tasks.filter((task) => task.isDone === true).length} de{" "}
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Task list */}
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task
            onTaskDone={handleTaskDone}
            key={task.id}
            taskId={task.id}
            content={task.content}
            isDone={task.isDone}
          />
        ))}
      </div>
    </div>
  )
}

export default App
