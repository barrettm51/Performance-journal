import React from "react";
import { useSelector } from "react-redux";
import { selectJournalEntries } from "./journalEntriesSlice";
import { Button } from 'react-bootstrap';

export default function JournalEntriesList({openExistingJournalEntry, createNewJournalEntry}) {
    const journalEntries = useSelector(selectJournalEntries);
    const journalEntriesLatestFirst = Object.values(journalEntries).reverse(); 

    return(
        <div className="JournalEntriesListContainer">
               <Button onClick={createNewJournalEntry} className="createNewButton" >New Journal Entry</Button>
               {journalEntriesLatestFirst.map((entry) => {
                return (
                    <Button className='selectableJournalEntry' key={entry.id} onClick={() => openExistingJournalEntry(entry.id)} >
                        <div className='journalEntryListNameContainer' >
                            <h2 className='journalEntryListName'  >{entry.journalEntryName}</h2>
                        </div>
                            <p className='journalDateCreated'>{entry.journalDateCreated}</p>
                    </Button> 
                );
               })} 
        </div>
    );
};

