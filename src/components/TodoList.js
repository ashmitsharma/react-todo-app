import React, { useState } from 'react'
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Making Todo List',
      completed: true
    },
    {
      id: 2,
      text: 'Make more project',
      completed: false
    }
  ]);

  const [text, setText] = useState('');

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }


  const completedTasksCount = tasks.filter(task => task.completed).length;
  const totalTasksCount = tasks.length;

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div>
        {completedTasksCount}/{totalTasksCount} tasks completed
      </div>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <div className="input-container">
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new task"/>
        <button onClick={() => addTask(text)}>Add</button>
      </div>
    </div>
  )
}

export default TodoList