import React from 'react';
import './JournalPage.css';
import CurrentJournalEntry from './currentJournalEntry/CurrentJournalEntry';
import JournalEntriesList from './JournalEntriesList/JournalEntriesList';
import { selectJournalEntries } from './JournalEntriesList/journalEntriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addJournalEntry } from './JournalEntriesList/journalEntriesSlice';

export default function JournalPage() {
    const journalEntries = useSelector(selectJournalEntries);
    const dispatch = useDispatch();
    
    const todaysDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    };

    const timeRightNow = () => {
        var today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        const ampm = today.getHours() >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours: 12; //changes 0 hour to 12am
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var time = hours + ":" + minutes + ampm;
        return time;
    }

    const createNewJournalEntry = (e) => {
        let newJournalId = Date.now();
        dispatch(addJournalEntry({
            id: newJournalId,
            journalDateCreated: `${todaysDate()} ${timeRightNow()}`,
            journalEntryName: `New Entry ${todaysDate()}`,
            journalContent: ''
        }));

    };

    const setJournalId = () => {

    };

    return(
        <div>
            <h1>Journal</h1>
            <button onClick={createNewJournalEntry}>New Journal Entry</button>
            <div className='container' >
                
                <JournalEntriesList />
                <CurrentJournalEntry />
            </div>
        </div>
    );
};