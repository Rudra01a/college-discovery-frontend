const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Mock Colleges route
app.get('/api/colleges', (req, res) => {
  res.json({ message: 'This will serve the college data!' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Backend Server running smoothly on http://localhost:${PORT}`);
  console.log(`Ready to handle API requests from the frontend!\n`);
});
