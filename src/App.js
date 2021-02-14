import logo from './logo.svg'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Message from './components/Message'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import AddTask from './components/AddTask'

const App = () => {

  // state and useEffect
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`)
    const data = await res.json()
    return data
  }

  // Fetch a Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add a Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data])
  }

  // Delete a Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const upDatedTask = {
      ...taskToToggle, reminder: !taskToToggle.reminder
    }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(upDatedTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)))
  }

  return (
    <>
      <Router>
        <Header />
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addTask'>Add Task</Link></li>
        <li><Link to='/showTasks'>Show Tasks</Link></li>
        <li><Link to='/about'>About</Link></li>
        <Switch>
          <Route path='/addTask' exact render={(props) => (<AddTask addTask={addTask} />)} />
          <Route path='/showTasks' exact render={(props) => (<Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks} />)}></Route>
          <Route path='/about' exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
