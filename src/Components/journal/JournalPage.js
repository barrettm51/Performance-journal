import React, { useState } from 'react';
import './JournalPage.css';
import CurrentJournalEntry from './currentJournalEntry/CurrentJournalEntry';
import JournalEntriesList from './JournalEntriesList/JournalEntriesList';
import { selectJournalEntries } from './JournalEntriesList/journalEntriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addJournalEntry } from './JournalEntriesList/journalEntriesSlice';
import { todaysDate, timeRightNow } from '../utilities';

export default function JournalPage() {
    const journalEntries = useSelector(selectJournalEntries);
    const dispatch = useDispatch();
    const [journalId, setJournalId] = useState('');

    const createNewJournalEntry = (e) => {
        let newJournalId = Date.now();
        dispatch(addJournalEntry({
            id: newJournalId,
            journalLastModified: `${todaysDate()} ${timeRightNow()}`,
            journalDateCreated: `${todaysDate()} ${timeRightNow()}`,
            journalEntryName: `New Entry`,
            journalContent: ''
        }));
        setJournalId(newJournalId);
    };

    return(
        <div>
            <h1>Journal</h1>
            <button onClick={createNewJournalEntry}>New Journal Entry</button>
            <div className='container' >
                <JournalEntriesList />
                {journalId ? <CurrentJournalEntry journalId={journalId} /> : <p>No notes to show</p> }
            </div>
        </div>
    );
};