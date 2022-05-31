import JournalPage from './Components/journal/JournalPage';
import Navigation from './Components/Nav';
import AccountSettings from './Components/AccountSettings/AccountSettings';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/login/Login';
import Authenticate from './Components/login/Authenticate';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PrivateRoute from './layouts/PrivateRoute';
import { useStytch } from '@stytch/stytch-react';
import { useCallback } from 'react';

function App() {
  const client = useStytch();
  const navigate = useNavigate();

  const handleLogin = async(email) => {
    try {
    await client.magicLinks.email.loginOrCreate(email);
    alert(`Email has been sent to ${email}`);
    } catch(e) {
      console.log('Error logging in');
      console.log(e);
    }

  }

  const handleLogout = useCallback(async () => {
    await client.session.revoke();
    alert('Logged out');
    navigate(0);
  }, [client]);

  return (
    <div className='entire-app'>
      <Navigation handleLogout={handleLogout} />
      <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/Dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/journals" element={
            <PrivateRoute>
              <JournalPage />
            </PrivateRoute>
          } />
          <Route path="/AccountSettings" element={
            <PrivateRoute>
              <AccountSettings />
            </PrivateRoute>
          } />
          <Route path="/Login" element={<Login handleLogin={handleLogin} />} ></Route>
          <Route path="/Authenticate" element={<Authenticate />} ></Route>
          <Route path="*" element={<p>404 Page not found!</p>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
