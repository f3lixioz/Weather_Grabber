import './styles/App.css';
import UserInput from './components/UserInput.js';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <UserInput />
        </Router>
      </header>
    </div>
  );
}

export default App;
