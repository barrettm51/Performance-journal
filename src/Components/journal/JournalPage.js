import React from 'react';
import CurrentJournalEntry from './currentJournalEntry/CurrentJournalEntry';
import { JournalEntriesList } from './JournalEntriesList';

export default function JournalPage() {

    return(
        <div>
            <JournalEntriesList />
            <CurrentJournalEntry />
        </div>
    );
};