// 1. Load Tools and Secrets
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// 1. Import the Route Map
const metricRoutes = require('./routes/metricRoutes');
const cors = require('cors');

// Load the .env file contents into the environment
dotenv.config();

// 2a. Start the Brain (Initialize Express)
const app = express();
// 2b. Middleware: Teach the Brain how to read JSON data
app.use(cors()); // Allow all cross-origin requests
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Get the PORT from the .env file, or use 5000 if it's missing
const PORT = process.env.PORT || 5000; 
// 3a. Mount the Route Map: Tell Express to use the new doors starting at /api/v1
app.use('/api/v1', metricRoutes);

// 3b. Connect to Memory (MongoDB)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected successfully! Memory is ready.');

    // Start server only after DB connection is successful
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
      console.log('MongoDB connection error:', err);
      process.exit(1); // Exit if connection fails
  });