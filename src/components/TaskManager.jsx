import React from 'react';

import { useState, useEffect } from 'react'

function TaskManager() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (text) {
      setTasks([...tasks, { id: Date.now(), text, done: false }])
      setText('')
    }
  }

  const toggleDone = (id) =>
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ))

  const deleteTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id))

  const filteredTasks = tasks.filter((task) =>
    filter === 'All' ? true : filter === 'Active' ? !task.done : task.done
  )

  return (
    <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">Task Manager</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        className="border p-2 w-full mb-3 rounded"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
      >
        Add Task
      </button>

      <div className="space-x-2 mb-4">
        <button onClick={() => setFilter('All')} className="px-3 py-1 border rounded">All</button>
        <button onClick={() => setFilter('Active')} className="px-3 py-1 border rounded">Active</button>
        <button onClick={() => setFilter('Completed')} className="px-3 py-1 border rounded">Completed</button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <span
              onClick={() => toggleDone(task.id)}
              className={`cursor-pointer ${task.done ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskManager
