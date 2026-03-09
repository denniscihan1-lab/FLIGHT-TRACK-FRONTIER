const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});