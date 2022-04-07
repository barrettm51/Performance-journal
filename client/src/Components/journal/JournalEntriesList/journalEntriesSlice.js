import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todaysDate, timeRightNow } from '../../utilities';

export const updateJournalEntryinDb = createAsyncThunk(
    'journalEntriesSlice/updateJournalEntry',
    async ({ journalEntryName, journalContent, id }) => {
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
        syncWithDb: 'No Changes Made' 
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
        [updateJournalEntryinDb.pending]: (state, action) => {
            state.syncWithDb = 'Syncing';
        },
        [updateJournalEntryinDb.fulfilled]: (state, action) => {
            state.syncWithDb = 'Synced';
        },
        [updateJournalEntryinDb.rejected]: (state, action) => {
            state.syncWithDb = 'Not connected to database';
        }
    }
});

export default journalEntriesSlice.reducer;
export const selectJournalEntries = (state) => state.journalEntries.journalEntries;
export const selectSyncStatus = (state) => state.journalEntries.syncWithDb;
export const {  loadJournalEntries,
                editJournalEntryContent, 
                editJournalEntryTitle } = journalEntriesSlice.actions;