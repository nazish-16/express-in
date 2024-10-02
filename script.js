const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('main page');
});

app.get('/hello/:name', (req, res) => {
  res.send('Hello, World!' + req.params.name);
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'bootstrap-example.html'));
  // res.json({'harry': 34})
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
