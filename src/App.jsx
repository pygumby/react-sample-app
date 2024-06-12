import { useState } from 'react'

// Custom components
import CustomForm from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0)

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className="container">
      <header>
        <h1>React Sample App</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  )
}

export default App
