import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(["Task 1", "Task 2"]);


  function Tasks() {
    const tasks = taskList.map((e) => <li key={e}>{e}</li>);
    return (
      <ul> {tasks} </ul>
    );
  }

  return (
    
    <div className="App">
      <h1>Josh's Task Planner</h1>
      <hr/>

      <div className="listbox">
        <h4> Current Tasks </h4>
        <div className="currentTasks">
          <Tasks/>
        </div>
      </div>

      <div className="listbox">
        <h4> New Task </h4>
        <div className="newTask">
          <form>
          <input id="newTask" type='text' value={task}
            onChange={event => {
              console.log(taskList);
              setTask(event.target.value)
              taskList.push(task)
              setTaskList(taskList);
            }}
          />
          <button> </button>
          </form>
          

        </div>
      </div>

    </div>
  )
}

export default App
