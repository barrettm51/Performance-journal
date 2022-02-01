import React from "react";
import './CurrentJournalEntry.css';

export default function CurrentJournalEntry() {
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
    }

    return(
        <div> 
            <form>
                <input 
                    id='entry-title'
                    type='text' 
                />
                <input  
                    type='text'
                    value={todaysDate()}
                    id='date-created'
                />
                <br></br>
                <textarea >
                </textarea>
            </form>
        </div>
    );
};