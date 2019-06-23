const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => console.log('Server running on localhost: ' + PORT));

app.get('/', (req, res) => res.send('Hello from server'));


