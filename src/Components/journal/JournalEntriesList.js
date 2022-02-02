import React from "react";
import { useSelector } from "react-redux";
import { selectJournalEntries } from "../../redux/journalEntries/journalEntriesSlice";

export default function JournalEntriesList() {
    const journalEntries = useSelector(selectJournalEntries);


    return(
        <div>
            <ul>
               {Object.values(journalEntries).map((entry) => {
                   return (
                       <li>{entry.journalEntryName}</li>
                   );
               })} 
            </ul>
        </div>
    );
};