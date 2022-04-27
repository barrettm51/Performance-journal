import React from 'react';

export default function Dashboard() {
    return(
        <div className='dashboard' >
            <h1>Dashboard</h1>
            <hr></hr>
            <h2> Welcome to your Performance Journal </h2>
            <p>Navigate to the journal page to start creating and editing journal entries! </p>
            <p>This app was made using:</p>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>Express</li>
                <li>Prisma ORM</li>
                <li>Postgres</li>
            </ul>
        </div>
    );
};