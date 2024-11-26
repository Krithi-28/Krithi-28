const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Loads environment variables from a .env file

const app = express();
app.use(express.json());  // Middleware to parse JSON data
const dbUri="mongodb+srv://krithiga:2BrSUfyfo3JYLlb5@employeedetails.ruh3c.mongodb.net/?retryWrites=true&w=majority&appName=EmployeeDetails";
// MongoDB connection
  // Get connection string from .env file
mongoose.connect(dbUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));


// Example route
app.post('/insertEmployee', (req, res) => {
  const { name, email } = req.body;
  // Insert data into MongoDB
  res.status(200).json({ message: 'Employee data inserted' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

