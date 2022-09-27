import React from 'react';
import { Button } from 'react-bootstrap';

export default function AccountSettings() {
    return(
        <div className='account-settings' >
            <h1>Account Settings</h1>
            <hr></hr>
            <p><b>Standard Account-</b>limited to 5 journal entries</p>
            <br></br>
            <form className='upgrade' action="/create-checkout-session" method="POST">
                <label>Get unlimited journal entries for life for only $25</label>
                <br></br>
                <Button type="submit">
                    Upgrade now!
                </Button>
            </form>
        </div>
    );
}