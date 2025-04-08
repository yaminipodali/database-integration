const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const movieRoutes = require('./routes/movieRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Use routes
app.use('/api/movies', movieRoutes);
app.use('/api/categories', categoryRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
