import { createSlice } from '@reduxjs/toolkit';
import { todaysDate, timeRightNow } from '../../utilities';

export const journalEntriesSlice = createSlice({
    name: 'journalEntries',
    initialState: {
        journalEntries: {}
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
    }
});

export default journalEntriesSlice.reducer;
export const selectJournalEntries = (state) => state.journalEntries.journalEntries;
export const {  loadJournalEntries,
                addJournalEntry, 
                editJournalEntryContent, 
                editJournalEntryTitle, 
                deleteJournalEntry } = journalEntriesSlice.actions;