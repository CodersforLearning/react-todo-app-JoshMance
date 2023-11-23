import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function Tasks() {
  const [names, setName] = useState(["A", "B"]);
  const listNames = names.map((name) => <li key={name}>{name}</li>);
  return (
    <ul> {listNames} </ul>
  );
}

function App() {

  return (
    
    <div className="App">
      <h1>Josh's Task Planner</h1>
      <hr />

      <div className="listbox">
        <h4> Current Tasks </h4>
        <div className="currentTasks">
        <Tasks/> 
        </div>
      </div>

      <div className="listbox">
        <h4> New Task </h4>
        <div className="newTask">

        </div>
      </div>

    </div>
  )
}

export default App
