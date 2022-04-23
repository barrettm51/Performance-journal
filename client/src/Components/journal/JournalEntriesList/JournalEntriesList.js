import React from "react";
import { useSelector } from "react-redux";
import { selectJournalEntries } from "./journalEntriesSlice";
import { Button } from 'react-bootstrap';

export default function JournalEntriesList({openExistingJournalEntry}) {
    const journalEntries = useSelector(selectJournalEntries);
    const journalEntriesLatestFirst = Object.values(journalEntries).reverse(); 

    return(
        <div className="JournalEntriesListContainer">
            <ul>
               {journalEntriesLatestFirst.map((entry) => {
                return (
                    <Button className='selectableJournalEntry' key={entry.id} onClick={() => openExistingJournalEntry(entry.id)} >
                        <li className='journalEntryListName'  >{entry.journalEntryName}
                            <ul className='ulForDate'>
                                <li className='journalDateCreated'>{entry.journalDateCreated}</li>
                            </ul>
                        </li>
                    </Button> 
                );
               })} 
            </ul>
        </div>
    );
};

