// import logo from './logo.svg';
import './App.css';
import DomainInput from './components/DomainInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      DNS Automation Lookup 
        { /* play with three.js or SVG....?  hmm.. <img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <DomainInput placeholder="Domain"/>
    </div>
  );
}

export default App;
