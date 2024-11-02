const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = process.env.PORT || 3001;

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskdb';

mongoose.connect(mongoUri, {}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});