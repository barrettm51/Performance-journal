const express = require('express');
const app = express();
const mockJournalEntries = require('./mockDB');
const bodyParser = require('body-parser');

//Prisma Code
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//BOILER PLATE TESTER CODE FOR PRISMA 
// async function main() {
//     const allEntries = await prisma.journal_entries.findMany();
//     console.log(allEntries);
// }

// main()
//     .catch((e) => {
//         throw e;
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/journals', async (req, res) => {
    // res.send(mockJournalEntries);
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

app.put('/journals/:journalId', (req, res) => {
    //
});

app.post('/journals', (req, res) => {

});

app.delete('/journals/:journalId', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

