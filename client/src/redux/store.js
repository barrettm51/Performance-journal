import { configureStore } from '@reduxjs/toolkit';

import journalEntriesReducer from '../Components/journal/JournalEntriesList/journalEntriesSlice';

const store = configureStore({
    reducer: {
        journalEntries: journalEntriesReducer
    }
});

export default store;