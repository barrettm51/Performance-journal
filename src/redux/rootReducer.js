import { combineReducers } from 'redux';
import journalEntriesReducer from './journalEntries/journalEntriesSlice';

const rootReducer = combineReducers({
    counter: journalEntriesReducer,
})


export default rootReducer;

