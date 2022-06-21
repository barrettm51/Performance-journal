import { useEffect } from 'react';
import { useStytch, useStytchSession } from '@stytch/stytch-react';
import { useNavigate } from 'react-router-dom';

function Authenticate () {
    const stytch = useStytch();
    const session = useStytchSession();
    const navigate = useNavigate();

    useEffect(() => {
        if(session) {
            navigate('/journals');
        } else {
            const token = new URLSearchParams(window.location.search).get('token');

            stytch.magicLinks.authenticate(token, {
                session_duration_minutes: 60
            }).then((response) => {
                console.log(response);
                alert('Successfully Authenticated');
                navigate(0);
            })
        }
    }, [stytch, session])
    
    return (
        <div>
            <h1>Loading...</h1>
            <p>Please wait while we authenticate your token</p>
        </div>
    );
}

export default Authenticate;

