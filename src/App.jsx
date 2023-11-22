import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const nextId = 4;
  const tasks =  [
    { name: 'Go Shopping', id: 1},
    { name: 'Clean the Car', id: 2},
    { name: 'Read book', id: 3},
  ];
  const listTasks = tasks.map(task =>
    <li key={task.id}> {task.name} </li>
  );

  return (
    <div className="App">
       <h1>Josh's Task Planner</h1>

       <div className="listbox">
          <h4> Current Tasks </h4>
          <ul className="currentTask">{listTasks}</ul>
       </div>

       <div className="listbox">
       <h4> New Task </h4>
          <div className="newTask">

            <input type="text" id="taskNames" name="name" required minlength="4" maxlength="8" size="20" />
          
          </div>
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
