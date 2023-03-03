import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School Meeting",
      day: "Feb 6th at 10:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery Shopping",
      day: "Feb 8th at 5:30pm",
      reminder: false,
    },
  ])

  const deleteTask = (id) => (
    console.log('delete', id)
  )

  return (
    <>
      <div className="container">
        <Header />
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>

    </>
  );
}

export default App;
