import { Navigate } from 'react-router-dom';
import { useStytchSession, Stytch, SDKProductTypes } from '@stytch/stytch-react';

function Login() {
    const session = useStytchSession();

    const stytchProps = {
        loginOrSignupView: {
            products: [SDKProductTypes.emailMagicLinks],
            emailMagicLinksOptions: {
              loginRedirectURL: "http://localhost:5000/authenticate",
              loginExpirationMinutes: 30,
              signupRedirectURL: "http://localhost:5000/authenticate",
              signupExpirationMinutes: 30,
            }
          },
          styles: {
            fontFamily: '"Helvetica New", Helvetica, sans-serif',
            width: "321px",
            primaryColor: "#0577CA",
            primaryTextColor: "#090909",
          },
          callbacks: {
            onEvent: async (response) => {
                console.log(response);
                //Check if user exists in DB
                let userExists;
                await fetch(`/users/${response.eventData.email}`, {
                    method: 'GET'
                }).then(response => response.json())
                .then((json) => {
                    console.log(`GET succeeded. Response:`, json);
                    userExists = json.userExists;
                });
                if(response.eventData.type === 'USER_EVENT_TYPE' && !userExists) {
                    //Create new user in DB if they don't exist already
                    try{
                        fetch('/users', {
                            method: 'POST',
                            mode: 'cors',
                            body: JSON.stringify({
                                userId: response.eventData.userId,
                                email_address: response.eventData.email
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        }).then((response) => console.log('user created', `Response: ${response}`))
                        
                    } catch(e) {
                        console.log(e);
                    }
                }
            },
            onSuccess: (response) => {
            //Handle successfully sent magic link
                console.log(response);
            },
            onError: (error) => console.log(error),
          },
    }

    if(session) return <Navigate to='/Dashboard' replace />; 

    return (
        <div className='login' >
            {/* <h1>Login or Sign Up</h1>
            <form onSubmit={handleSubmit} >
                <input type="email" name="email" id="email" placeholder="ex: yourname@email.com"></input>
                <input type="submit" value="Login" ></input>
            </form>
            <p>No password required. Link to login will be sent to your email</p> */}
            <Stytch 
                loginOrSignupView={stytchProps.loginOrSignupView}
                // styles={stytchProps.styles}
                callbacks={stytchProps.callbacks}
            />
        </div>
    );
}

export default Login;