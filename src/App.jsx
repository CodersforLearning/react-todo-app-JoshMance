import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const taskNames = [];

  return (
    <div className="App">
       <h1>Josh's To-Do App</h1>

       <div className="listbox">
          <h4> Current Tasks </h4>
 
            <ul className="currentTask">
              <li>Go shopping aaaaaaa</li>
              <li>Clean the car</li>
            </ul>
  
       </div>
       <div className="listbox">
       <h4> New Task </h4>
       <ul className="newTask">
              <li>Go shopping aa</li>
              <li>Clean the car</li>
            </ul>
       </div>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
