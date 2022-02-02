import React from 'react';
import './JournalPage.css';
import CurrentJournalEntry from './currentJournalEntry/CurrentJournalEntry';
import JournalEntriesList from './JournalEntriesList';

export default function JournalPage() {

    return(
        <div className='container' >
            <JournalEntriesList />
            <CurrentJournalEntry />
        </div>
    );
};