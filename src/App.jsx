// React
import { useState } from 'react'

// Custom
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(task => (
      task.id === id
        ? {...task, checked: !task.checked}
        : task
    )))
  }

  return (
    <div className="container">
      <header>
        <h1>React Sample App</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
    </div>
  )
}

export default App
