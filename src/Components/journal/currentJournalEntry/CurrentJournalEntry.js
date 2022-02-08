import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectJournalEntries } from "../JournalEntriesList/journalEntriesSlice";
import { editJournalEntryContent, editJournalEntryTitle, deleteEntry } from "../JournalEntriesList/journalEntriesSlice";

export default function CurrentJournalEntry({journalId}) {
    const journalEntries = useSelector(selectJournalEntries);
    const dispatch = useDispatch();
    
    const editEntryTitle = (e) => {
        e.preventDefault();
        dispatch(editJournalEntryTitle({
            id: journalId,
            journalEntryName: e.currentTarget.value
        }))
    };

    const editEntry = (e) => {
        e.preventDefault();
        dispatch(editJournalEntryContent({
            id: journalId,
            journalContent: e.currentTarget.value
        }))
    };

    const deleteEntry = () => {
        dispatch(deleteEntry({
            id: journalId
        }));

    };

    return(
        <div> 
            <form >
                <input 
                    id='entry-title'
                    type='text' 
                    value={journalEntries[journalId].journalEntryName}
                    onChange={editEntryTitle}
                    placeholder="Today's Journal"
                />
                <br></br>
                <textarea 
                    id='journal-content'
                    value={journalEntries[journalId].journalContent}
                    onChange={editEntry} 
                    placeholder="Write your entry here"
                >
                </textarea>
                <p id='date-created'>Entry created: {journalEntries[journalId].journalDateCreated}</p>
                <p id='last-modified'>Last modified: {journalEntries[journalId].journalLastModified}</p>
                <br></br>
                {/* <button onClick={deleteEntry} >Delete</button> To be implemented once the database is up and running*/} 
            </form>
        </div>
    );
};