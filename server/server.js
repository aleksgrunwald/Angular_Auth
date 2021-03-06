const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');

const PORT = 3000;
const api = require('./routes/api')

const app = express();

app.use(bodyParser.json());
// app.use(favicon(__dirname + '/angularFront/favicon.ico'));

app.use('/api', api);
app.listen(PORT, () => console.log('Server running on localhost: ' + PORT));

app.get('/', (req, res) => res.send('Hello from server'));


