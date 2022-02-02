import { configureStore } from '@reduxjs/toolkit';

import journalEntriesReducer from './journalEntries/journalEntriesSlice';

const store = configureStore({
    reducer: {
        journalEntries: journalEntriesReducer
    }
});

export default store;