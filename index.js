const express = require('express');
const cors = require('cors');
const dataSource = require('./dataSource');

const app = express();

const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => res.json(dataSource));
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
