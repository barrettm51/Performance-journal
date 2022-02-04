import { createSlice } from '@reduxjs/toolkit';

export const journalEntriesSlice = createSlice({
    name: 'journalEntries',
    initialState: {
        journalEntries: {}
    },
    reducers: {
        addJournalEntry: (state, action) => {
            const {id, journalDateCreated, journalEntryName, journalContent} = action.payload;
            console.log(journalContent);
            state.journalEntries[id] = {
                id: id,
                journalDateCreated: journalDateCreated,
                journalEntryName: journalEntryName,
                journalContent: journalContent
            }
        },
        editJournalEntry: (state, action) => {
            //add logic
        }
    }
});

export default journalEntriesSlice.reducer;
export const selectJournalEntries = (state) => state.journalEntries.journalEntries;
export const { addJournalEntry } = journalEntriesSlice.actions;