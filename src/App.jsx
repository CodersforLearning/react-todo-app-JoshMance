import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const tasks =  [
    { name: 'Go Shopping', id: 1},
    { name: 'Clean the Car', id: 2},
    { name: 'Read book', id: 3},
  ];
  const listTasks = tasks.map(task =>
    <li key={task.id}> {task.name} </li>
  );


  function handleSubmit(e) {
    e.preventDefault();
    setCount((count) => count + 1);
  }


  return (
    <div className="App">
       <h1>Josh's Task Planner</h1>
       <hr />

       <div className="listbox">
          <h4> Current Tasks </h4>
          <ul className="currentTask">{listTasks}</ul>
          {count}
       </div>

       <div className="listbox">
       <h4> New Task </h4>
          <div className="newTask">

          <form >
          <input type="text" onChange={(e) => setInput(e.target.value)}></input>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
          </form>
          
        
          </div>
       </div>
     

    </div>
  )
}

export default App
