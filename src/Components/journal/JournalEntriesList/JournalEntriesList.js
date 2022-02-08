import React from "react";
import { useSelector } from "react-redux";
import { selectJournalEntries } from "./journalEntriesSlice";

export default function JournalEntriesList({openExistingJournalEntry}) {
    const journalEntries = useSelector(selectJournalEntries);
    const journalEntriesLatestFirst = Object.values(journalEntries).reverse(); 

    return(
        <div className="JournalEntriesListContainer">
            <ul>
               {journalEntriesLatestFirst.map((entry) => {
                return (
                    <button className='selectableJournalEntry' key={entry.id} onClick={() => openExistingJournalEntry(entry.id)} >
                        <li className='journalEntryListName'  >{entry.journalEntryName}
                            <ul className='ulForDate'>
                                <li className='journalDateCreated'>{entry.journalDateCreated}</li>
                            </ul>
                        </li>
                    </button> 
                );
               })} 
            </ul>
        </div>
    );
};

