import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const TaskList = ({ token, setToken }) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
        setError(''); // Reset error if fetch is successful
      } catch (error) {
        setError('Error fetching tasks'); // Set error message if fetch fails
      }
    };
    fetchTasks();
  }, [token]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/tasks', { title, description }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks([...tasks, response.data]);
      setTitle('');
      setDescription('');
      setError(''); // Reset error if creation is successful
    } catch (error) {
      setError('Error creating task'); // Set error message if creation fails
    }
  };

  const handleLogout = () => {
    setToken(''); // Clear the token to log the user out
  };

  return (
    <div>
      <h2>Task List</h2>
      <button onClick={handleLogout}>Logout</button> {/* Logout Button */}
      <form onSubmit={handleCreateTask}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" required />
        <button type="submit">Create Task</button>
      </form>
      {error && <p>{error}</p>} {/* Display error message */}
      {tasks.length === 0 ? (
        <p>No tasks found. Please create a new task.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
