/**
 * Placeholder for backend application entry point
 * This file will contain the main entry point for the backend application.
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
