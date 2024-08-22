const express = require('express');
const app = express();
const port = 3001;

app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from the Node API!" });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
