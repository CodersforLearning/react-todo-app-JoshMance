import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {

  const [message, setMessage] = useState('');
 
  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };


  return (
    <><TasksList />
    
    <div className="App">
      <h1>Josh's Task Planner</h1>
      <hr />

      <div className="listbox">
        <h4> Current Tasks </h4>
        <div className="currentTasks">
          here
        </div>
      </div>

      <div className="listbox">
        <h4> New Task </h4>
        <div className="newTask">

          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}>
          </input>

        </div>
      </div>


    </div></>
  )
}

export default App
