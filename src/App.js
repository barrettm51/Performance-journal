import logo from './logo.svg';
import './App.css';
import CurrentJournalEntry from './Components/journal/currentJournalEntry/CurrentJournalEntry';
import JournalPage from './Components/journal/JournalPage';
import Nav from './Components/Nav';
import AccountSettings from './Components/AccountSettings/AccountSettings';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div /*className="App"*/>
      <Nav />
      
      <JournalPage />
    </div>
  );
}

export default App;
