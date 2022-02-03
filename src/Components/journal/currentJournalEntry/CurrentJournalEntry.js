import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectJournalEntries } from "../../../redux/journalEntries/journalEntriesSlice";
import { addJournalEntry } from "../../../redux/journalEntries/journalEntriesSlice";

export default function CurrentJournalEntry() {
    const [journalEntryName, setJournalEntryName] = useState(""); 
    const [journalContent, setJournalContent] = useState(""); 
    const [journalDateCreated, setjournalDateCreated] = useState(""); 
    const journalEntries = useSelector(selectJournalEntries);
    const dispatch = useDispatch();
    
    const todaysDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        const ampm = today.getHours() >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours: 12; //changes 0 hour to 12am
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var time = hours + ":" + minutes + ampm;
        today = mm + '/' + dd + '/' + yyyy + ' ' + time;
        return today;
    };

    useEffect(() => {
        setjournalDateCreated(todaysDate);
    }, []);

    const handleSave = (e) => {
        e.preventDefault();
        
        dispatch(addJournalEntry({
            id: Date.now(),
            journalDateCreated: journalDateCreated,
            journalEntryName: journalEntryName, 
            journalContent: journalContent
        }));
    };

    return(
        <div> 
            <form onSubmit={handleSave} >
                <input 
                    id='entry-title'
                    type='text' 
                    value={journalEntryName}
                    onChange={(e) => setJournalEntryName(e.currentTarget.value)}
                    placeholder="Today's Journal"
                />
                <input  
                    type='text'
                    id='date-created'
                    defaultValue={journalDateCreated}
                />
                <br></br>
                <textarea 
                    id='journal-content'
                    value={journalContent}
                    onChange={(e) => setJournalContent(e.currentTarget.value)} 
                    placeholder="Write your entry here"
                >
                </textarea>
                <br></br>
                <input type="submit" value='Save' />
            </form>
        </div>
    );
};