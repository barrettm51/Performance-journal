import { Navigate } from 'react-router-dom';
import { useStytchSession } from '@stytch/stytch-react';

function Login({ handleLogin }) {
    const session = useStytchSession();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { email } = e.target.elements;

        handleLogin(email.value);
    }

    if(session) return <Navigate to='/Dashboard' replace /> 

    return (
        <div className='login' >
            <h1>Login or Sign Up</h1>
            <form onSubmit={handleSubmit} >
                <input type="email" name="email" id="email" placeholder="ex: yourname@email.com"></input>
                <input type="submit" value="Login" ></input>
            </form>
            <p>No password required. Link to login will be sent to your email</p>
        </div>
    );
}

export default Login;