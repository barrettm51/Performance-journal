import { createSlice } from '@reduxjs/toolkit';

export const journalEntriesSlice = createSlice({
    name: 'journalEntries',
    initialState: {
        journalEntries: {}
    },
    reducers: {
        addJournalEntry: (state, action) => {
            //Add logic
        },
        editJournalEntry: (state, action) => {
            //add logic
        }
    }
});

export default journalEntriesSlice.reducer;
export const selectJournalEntries = (state) => state.journalEntries.journalEntries;
//export actions here