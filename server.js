const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


const journalRouter = require('./server/journalRouter');
app.use('/', journalRouter);

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});

