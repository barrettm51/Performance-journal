import logo from './logo.svg';
import './App.css';
import CurrentJournalEntry from './Components/journal/currentJournalEntry/CurrentJournalEntry';

function App() {
  return (
    <div /*className="App"*/>
      <header /*className="App-header"*/>
        <img src={logo} /*className="App-logo" alt="logo"*/ />
        <h1>
          Performance Journal
        </h1>
      </header>
      <CurrentJournalEntry />
    </div>
  );
}

export default App;
