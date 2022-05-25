import JournalPage from './Components/journal/JournalPage';
import Navigation from './Components/Nav';
import AccountSettings from './Components/AccountSettings/AccountSettings';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/login/Login';
import Authenticate from './Components/login/Authenticate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='entire-app'>
        <Navigation />
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<JournalPage />} />
            <Route path="/journals" element={<JournalPage />} />
            <Route path="/AccountSettings" element={<AccountSettings />} />
            <Route path="/Login" element={<Login />} ></Route>
            <Route path="/Authenticate" element={<Authenticate />} ></Route>
            <Route path="*" element={<p>404 Page not found!</p>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
