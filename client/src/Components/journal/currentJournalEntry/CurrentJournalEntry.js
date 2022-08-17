import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectJournalEntries, selectSyncStatus, updateJournalEntryinDb } from "../JournalEntriesList/journalEntriesSlice";
import { editJournalEntryContent, editJournalEntryTitle } from "../JournalEntriesList/journalEntriesSlice";

export default function CurrentJournalEntry({journalId, setJournalId, fetchJournalEntriesFromDB}) {
    const journalEntries = useSelector(selectJournalEntries);
    const syncStatus = useSelector(selectSyncStatus);
    const dispatch = useDispatch();

    const editEntryTitle = (e) => {
        e.preventDefault();
        dispatch(editJournalEntryTitle({
            id: journalId,
            journalEntryName: e.currentTarget.value
        }));
        dispatch(updateJournalEntryinDb({
            id: journalId,
            journalEntryName: e.currentTarget.value
        }));
    };

    const editEntry = (e) => {
        e.preventDefault();
        dispatch(editJournalEntryContent({
            id: journalId,
            journalContent: e.currentTarget.value
        }));
        dispatch(updateJournalEntryinDb({
            id: journalId,
            journalContent: e.currentTarget.value
        }));
    };

    const deleteEntry = () => {
        if (window.confirm("Are you sure you want to delete this entry?")) {
        fetch(`/journals/${journalId}`, {
            method: 'DELETE'
        })
        .then( () => fetchJournalEntriesFromDB() );
        }
    };

    return(
            <form className="journalEntryForm">
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
                <p className="syncStatus">{syncStatus}</p>
                <button id='delete-button' onClick={deleteEntry} >Delete Entry</button>
            </form>
    );
};