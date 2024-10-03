const express = require('express');
var { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
  console.log(`Blog is running at http://localhost:${port}`);
});
