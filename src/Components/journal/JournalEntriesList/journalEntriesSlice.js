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
                    id: id,
                    journalDateCreated: journalDateCreated,
                    journalLastModified: journalLastModified,
                    journalEntryName: journalEntryName,
                    journalContent: journalContent
                }
            }) 
        },
        addJournalEntry: (state, action) => {
            const {id, journalDateCreated, journalLastModified, journalEntryName, journalContent} = action.payload;
            state.journalEntries[id] = {
                id: id,
                journalDateCreated: journalDateCreated,
                journalLastModified: journalLastModified,
                journalEntryName: journalEntryName,
                journalContent: journalContent
            }
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
        },
        deleteJournalEntry: (state, action) => {
            const { id } = action.payload;
            //Add in logic once database is connected
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