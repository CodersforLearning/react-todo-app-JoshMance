import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { render } from 'react-dom';



function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(["Task 1", "Task 2"]);

  function Tasks() {
    const tasks = taskList.map((e) => <li key={e}>{e}  
                                       <input type="checkbox"/> 
                                      <button className="deleteButton"
                                          onClick = {event => {
                                            var newTaskList = [...taskList];
                                            newTaskList.splice(newTaskList.indexOf(e), 1);
                                            setTaskList(newTaskList);
                                          }}>
                                          Delete
                                          </button>
                                        
                                      </li> );
    return (
        <ul> {tasks} </ul>
      
    );
  }

  return (
    
    <div className="App">
      <h1 className="title">Josh's Task Planner</h1>
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
          <form id = "newTaskForm">
            <input type='text' value={task} 
              onChange = {event => { 
                setTask(event.target.value)
                event.preventDefault();
                
              }}
            />
            <button className="enterButton"
              onClick = {event => {
                var newTaskList = [...taskList];
                newTaskList.push(task);
                setTaskList(newTaskList);
                event.preventDefault();
              }}>
              Create
              </button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default App
