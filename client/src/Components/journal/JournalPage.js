import React, { useEffect, useState } from 'react';
import CurrentJournalEntry from './currentJournalEntry/CurrentJournalEntry';
import JournalEntriesList from './JournalEntriesList/JournalEntriesList';
import { loadJournalEntries } from './JournalEntriesList/journalEntriesSlice';
import { useDispatch } from 'react-redux';
import { todaysDate, timeRightNow } from '../utilities';
import { useStytchSession } from '@stytch/stytch-react';

export default function JournalPage() {
    const session = useStytchSession();
    const dispatch = useDispatch();
    const [journalId, setJournalId] = useState('');

    const fetchJournalEntriesFromDB = () => {
        fetch(`/journals.json/${session.user_id}`)
        .then(
            response => response.json()
        ).then(
            data => dispatch(loadJournalEntries(data))
        )
    };

    useEffect(() => {
        fetchJournalEntriesFromDB();
    }, []);

    const createNewJournalEntry = (e) => {
        const newJournalEntry = {
            journalLastModified: `${todaysDate()} ${timeRightNow()}`,
            journalDateCreated: `${todaysDate()} ${timeRightNow()}`,
            journalEntryName: `New Entry`,
            journalContent: '',
            user_id: session.user_id
        };
        fetch("/journals", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then( () => {
            fetchJournalEntriesFromDB()
        });        
        //Line below is commented out because it throws an Error right now. I need to find a way to 
        //switch to the newly created Entry without it throwing an error.
        // .then( () => setJournalId(newJournalId) );
    };

    const openExistingJournalEntry = (journalIdToOpen) => {
        setJournalId(journalIdToOpen);
    };

    return(
        <div className='journal-page' >
            <h1>Journal Entries</h1>
            <hr></hr>
            <div className='journal-entries-list-and-current-container' >
                <JournalEntriesList openExistingJournalEntry={openExistingJournalEntry} createNewJournalEntry={createNewJournalEntry} />
                {journalId ? <CurrentJournalEntry journalId={journalId} setJournalId={setJournalId} fetchJournalEntriesFromDB={fetchJournalEntriesFromDB} /> : <p>Select Note</p> }
            </div>
        </div>
    );
};