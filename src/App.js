import logo from './logo.svg';
import './App.css';
import JournalPage from './Components/journal/JournalPage';
import Nav from './Components/Nav';
import AccountSettings from './Components/AccountSettings/AccountSettings';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Nav />
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<JournalPage />} />
            <Route path="/AccountSettings" element={<AccountSettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
