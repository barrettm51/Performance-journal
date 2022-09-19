import { Navigate } from 'react-router-dom';
import { useStytchSession, Stytch, SDKProductTypes, OAuthProvidersTypes, OneTapPositions } from '@stytch/stytch-react';
import { useEffect } from 'react';

function Login() {
    const session = useStytchSession();

    useEffect(() => {
        console.log('redirect URL', process.env.REACT_APP_LOGIN_OR_SIGNUP_REDIRECT_URL);
    }, [])
    //process.env.REACT_APP_LOGIN_OR_SIGNUP_REDIRECT_URL
    const stytchProps = {
        loginOrSignupView: {
            products: [SDKProductTypes.emailMagicLinks, SDKProductTypes.oauth],
            emailMagicLinksOptions: {
              loginRedirectURL: 'https://performance-journal-h.herokuapp.com/authenticate',
              loginExpirationMinutes: 30,
              signupRedirectURL: 'https://performance-journal-h.herokuapp.com/authenticate',
              signupExpirationMinutes: 30,
            }
            },
            oauthOptions: {
                loginRedirectURL: 'https://performance-journal-h.herokuapp.com/authenticate',
                signupRedirectURL: 'https://performance-journal-h.herokuapp.com/authenticate',
                providers: [
                {
                    one_tap: true,
                    position: OneTapPositions.embedded,
                    type: OAuthProvidersTypes.Google
                }
                ]
            },
            style: {
                darkGrey: '#5C727D',
                fontFamily: 'Arial, Helvetica, sans-serif',
                hideHeaderText: false,
                lightGrey: '#F3F5F6',
                primaryColor: '#4E944F',
                primaryTextColor: '#19303D',
                secondaryTextColor: '#8296A1',
                width: '360px'
            },
            callbacks: {
                onEvent: async (response) => {
                    //Check if user exists in DB
                    let userExists;
                    await fetch(`/users/${response.eventData.email}`, {
                        method: 'GET'
                    }).then(response => response.json())
                    .then((json) => {
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
                },
                onError: (error) => console.log(error),
          },
    }

    if(session) return <Navigate to='/Dashboard' replace />; 

    return (
        <div className='login' >
            <Stytch 
                loginOrSignupView={stytchProps.loginOrSignupView}
                style={stytchProps.style}
                callbacks={stytchProps.callbacks}
            />
        </div>
    );
}

export default Login;