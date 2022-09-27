const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY);

//Prisma Code 
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PORT = process.env.PORT || 5000;

const clientBuildFolder = path.join(__dirname, "../client/build");

app.use(express.static(clientBuildFolder));

// app.use('/*', express.static(path.join(__dirname, "../client/build")));

app.use('/dashboard', express.static(clientBuildFolder));
app.use('/accountsettings', express.static(clientBuildFolder));
app.use('/login', express.static(clientBuildFolder));
app.use('/authenticate', express.static(clientBuildFolder));
app.use('/journals', express.static(clientBuildFolder));

app.use(bodyParser.json());

app.get('/journals.json/:userId', async (req, res) => {
    const allJournalEntries = await prisma.journal_entries.findMany({
        select: {
            id: true,
            journalDateCreated: true,
            journalLastModified: true,
            journalEntryName: true,
            journalContent: true,
        }, 
        where: {
            user_id: req.params.userId
        }
    });
    res.json(allJournalEntries);
});

app.put('/journals/:journalId', async (req, res) => {
    const updatedEntry = await prisma.journal_entries.update({
        where: {
            id: req.params.journalId
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
            id: req.params.journalId
        }
    });
    res.status(200).send(deletedJournalEntry);
});

// Stytch routes
app.get('/users/:emailAddress', async (req, res) => {
    const user = await prisma.users.findUnique({
        where: {
            email_address: req.params['emailAddress']
        },
        select: {
            email_address: true
        }
    });
    console.log(user);
    let userExists = user? true : false;
    res.status(200).send({userExists: userExists});
})

app.post('/users', async (req, res) => {
    const stytchUserId = req.body.userId;
    // Add user to database
    await prisma.users.create({
        data: {
            id: stytchUserId,
            email_address: req.body.email_address
        }
    })
    res.send(`Created user with stytch User ID: ${stytchUserId}`);
});

//Stripe Routes
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1LmkBWI97INfU37UbjKMWwjr',
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: `${process.env.DOMAIN}?success=true`,
        cancel_url: `${process.env.DOMAIN}?cancelled=true`,
        automatic_tax: {enabled: true},
    })

    res.redirect(303,session.url);
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

