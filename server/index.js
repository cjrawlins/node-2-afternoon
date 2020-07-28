//Import Dependencies //
const express = require('express');
const ctrl = require('./controllers/messages_controller');

//Setup App
const app = express();
const port = 3001;

app.use(express.json());
//app.use(express.static(__dirname + '/../public/build'));

// EndPoints
    // Create
    app.post('/api/messages', ctrl.create);
    // Read
    app.get('/api/messages', ctrl.read);
    // Update
    app.put('/api/messages/:id', ctrl.update);
    // Delete
    app.delete('/api/messages/:id', ctrl.delete);


// Start Listener and report port
app.listen( port, () => console.log(`Server Running on ${port}`) );