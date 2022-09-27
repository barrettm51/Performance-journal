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
  const stytch = useStytch();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await stytch.session.revoke();
    navigate(0);
  }, [stytch]);

  return (
    <div className='entire-app'>
      <Navigation handleLogout={handleLogout} />
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/journals" element={
            <PrivateRoute>
              <JournalPage />
            </PrivateRoute>
          } />
          <Route path="/accountsettings" element={
            <PrivateRoute>
              <AccountSettings />
            </PrivateRoute> 
          } />
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/authenticate" element={<Authenticate />} ></Route>
          <Route path="*" element={<p>404 Page not found!</p>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
