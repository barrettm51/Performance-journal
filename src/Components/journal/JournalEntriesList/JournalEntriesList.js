import React from "react";
import { useSelector } from "react-redux";
import { selectJournalEntries } from "./journalEntriesSlice";

export default function JournalEntriesList() {
    const journalEntries = useSelector(selectJournalEntries);
    const journalEntriesLatestFirst = Object.values(journalEntries).reverse(); 

    return(
        <div className="JournalEntriesListContainer">
            <ul>
               {journalEntriesLatestFirst.map((entry) => {
                return (
                    <li className='journalEntryListName'>{entry.journalEntryName}
                        <ul className='ulForDate'>
                            <li className='journalDateCreated'>{entry.journalDateCreated}</li>
                        </ul>
                    </li>
                );
               })} 
            </ul>
        </div>
    );
};

