import React from 'react';
import './JournalPage.css';
import CurrentJournalEntry from './currentJournalEntry/CurrentJournalEntry';
import JournalEntriesList from './JournalEntriesList/JournalEntriesList';

export default function JournalPage() {

    return(
        <div>
            <h1>Journal</h1>
            <div className='container' >
                <JournalEntriesList />
                <CurrentJournalEntry />
            </div>
        </div>
    );
};