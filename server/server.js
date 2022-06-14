const express = require('express');
const app = express();
// const mockJournalEntries = require('./mockDB');
const bodyParser = require('body-parser');
const path = require('path');

//Prisma Code
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PORT = process.env.PORT || 5000;

const clientBuildFolder = path.join(__dirname, "../client/build");

app.use(express.static(clientBuildFolder));

// app.use('/*', express.static(path.join(__dirname, "../client/build")));

app.use('/Dashboard', express.static(clientBuildFolder));
app.use('/AccountSettings', express.static(clientBuildFolder));
app.use('/Login', express.static(clientBuildFolder));
app.use('/Authenticate', express.static(clientBuildFolder));

app.use(bodyParser.json());

app.get('/journals', async (req, res) => {
    const allJournalEntries = await prisma.journal_entries.findMany({
        select: {
            id: true,
            journalDateCreated: true,
            journalLastModified: true,
            journalEntryName: true,
            journalContent: true,
        }
    });
    res.json(allJournalEntries);
});

app.put('/journals/:journalId', async (req, res) => {
    const updatedEntry = await prisma.journal_entries.update({
        where: {
            id: parseInt(req.params.journalId)
        },
        data: req.body
    });
    res.status(200).send(updatedEntry);
});

app.post('/journals', async (req, res) => {
    const addJournalEntry = await prisma.journal_entries.create({
        data: req.body
    });
    res.status(201).send(addJournalEntry);
});

app.delete('/journals/:journalId', async (req, res) => {
    const deletedJournalEntry = await prisma.journal_entries.delete({
        where: {
            id: parseInt(req.params.journalId)
        }
    });
    res.status(200).send(deletedJournalEntry);
});

//Needs to be completed:
// app.post('/users', (req, res) => {
//     const stytchUserId = req.body.userId;
//     // Add user to database
//     res.send(`Created user with stytch User ID: ${stytchUserId}`);
// })

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

