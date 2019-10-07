require('dotenv').config({path: __dirname + '/../../.env'});

const c = require('./Controller');

const express = require('express');

// const {SERVER_PORT} = process.env;

const app = express();

app.use(express.json());

//GPPD endpoints go here
app.get('/api/shows', c.allShows);

app.get('/api/goals', c.showsIWant);

app.post('/api/shows', c.addShow);

app.delete('/api/shows/:index', c.deleteShow);

app.delete('/api/edit/:index', c.deleteTwo);

app.put('/api/shows', c.moveShow);

app.listen(3010, () => {
    console.log('Server running on port 3010');
})


