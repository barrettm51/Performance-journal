const express = require('express');
const app = express();
const mockJournalEntries = require('./mockDB');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

// const journalRouter = require('./server/journalRouter'); Add this later once the server is set up
// app.use('/', journalRouter); 

app.get('/journals', (req, res) => {
    res.send(mockJournalEntries);
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

