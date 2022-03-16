import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todaysDate, timeRightNow } from '../../utilities';

export const updateJournalEntry = createAsyncThunk(
    'journalEntriesSlice/updateJournalEntry',
    async ({ journalEntryName, journalContent, id }) => {
        console.log('thunk');
        const updatedEntry = await fetch(`/journals/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                journalLastModified: `${todaysDate()} ${timeRightNow()}`,
                journalEntryName,
                journalContent
            })
        })
        .then(response => response.json());
        return updatedEntry;
    }
);

export const journalEntriesSlice = createSlice({
    name: 'journalEntries',
    initialState: {
        journalEntries: {},
        syncWithDb: 'N/A' 
    },
    reducers: {
        loadJournalEntries: (state, action) => {
            action.payload.forEach((entry) => {
                const { id, journalDateCreated, journalLastModified, journalEntryName, journalContent } = entry;
                state.journalEntries[id] = {
                    id,
                    journalDateCreated,
                    journalLastModified,
                    journalEntryName,
                    journalContent
                }
            }) 
        },
        editJournalEntryTitle: (state, action) => {
            const { journalEntryName, id } = action.payload;
            state.journalEntries[id].journalEntryName = journalEntryName;
            state.journalEntries[id].journalLastModified = `${todaysDate()} ${timeRightNow()}`;
            
        },
        editJournalEntryContent: (state, action) => {
            const { journalContent, id } = action.payload;
            state.journalEntries[id].journalContent = journalContent;
            state.journalEntries[id].journalLastModified = `${todaysDate()} ${timeRightNow()}`;
        }
    },
    extraReducers: {
        [updateJournalEntry.pending]: (state, action) => {
            state.syncWithDb = 'Syncing';
            // const { id, journalEntryName, journalContent, journalLastModified } = action.payload;
            // state.journalEntries[id].journalEntryName = journalEntryName;
            // state.journalEntries[id].journalContent = journalContent;
            // state.journalEntries[id].journalLastModified = journalLastModified;
        },
        [updateJournalEntry.fulfilled]: (state, action) => {
            state.syncWithDb = 'Synced';
            // const { id, journalEntryName, journalContent, journalLastModified } = action.payload;
            // state.journalEntries[id].journalEntryName = journalEntryName;
            // state.journalEntries[id].journalContent = journalContent;
            // state.journalEntries[id].journalLastModified = journalLastModified;
        },
        [updateJournalEntry.rejected]: (state, action) => {
            state.syncWithDb = 'Not connected to database';
            // const { id, journalEntryName, journalContent, journalLastModified } = action.payload;
            // state.journalEntries[id].journalEntryName = journalEntryName;
            // state.journalEntries[id].journalContent = journalContent;
            // state.journalEntries[id].journalLastModified = journalLastModified;
        }
    }
});

export default journalEntriesSlice.reducer;
export const selectJournalEntries = (state) => state.journalEntries.journalEntries;
export const {  loadJournalEntries,
                addJournalEntry, 
                editJournalEntryContent, 
                editJournalEntryTitle, 
                deleteJournalEntry } = journalEntriesSlice.actions;