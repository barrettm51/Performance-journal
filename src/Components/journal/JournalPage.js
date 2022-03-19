import React, { useEffect, useState } from 'react';
import CurrentJournalEntry from './currentJournalEntry/CurrentJournalEntry';
import JournalEntriesList from './JournalEntriesList/JournalEntriesList';
import { selectJournalEntries, addJournalEntry, loadJournalEntries } from './JournalEntriesList/journalEntriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { todaysDate, timeRightNow } from '../utilities';

export default function JournalPage() {
    const journalEntries = useSelector(selectJournalEntries);
    const dispatch = useDispatch();
    const [journalId, setJournalId] = useState('');

    const fetchJournalEntriesFromDB = () => {
        fetch("/journals")
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
        let newJournalId = Date.now();
        const newJournalEntry = {
            id: newJournalId,
            journalLastModified: `${todaysDate()} ${timeRightNow()}`,
            journalDateCreated: `${todaysDate()} ${timeRightNow()}`,
            journalEntryName: `New Entry`,
            journalContent: ''
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
        <div>
            <h1>Journal</h1>
            <button onClick={createNewJournalEntry}>New Journal Entry</button>
            <div className='container' >
                <JournalEntriesList openExistingJournalEntry={openExistingJournalEntry} />
                {journalId ? <CurrentJournalEntry journalId={journalId} setJournalId={setJournalId} fetchJournalEntriesFromDB={fetchJournalEntriesFromDB} /> : <p>Select Note</p> }
            </div>
        </div>
    );
};