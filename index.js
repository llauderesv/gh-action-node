const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {
      name: 'Vince Llauderes',
      age: 27,
      address: 'Caloocan City',
      position: 'Software Engineer',
    },
    {
      name: 'Apple Llauderes',
      age: 30,
      address: 'Pasig City',
      position: 'Operational Research Representative',
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
