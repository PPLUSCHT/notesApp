const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const config = require('./config').default;

const app = express();

morgan.token('data', (req, res) => {return req.method == 'POST' ? JSON.stringify(req.body) : ''});
app.use(morgan(':method :data'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to notes</h1>');
});

app.get('/info', (req, res) => {
    res.send('This is a demo app that connects a note template to a mongoDB database');
});

const PORT = config.index.port;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});