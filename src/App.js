// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { /* play with three.js or SVG....?  hmm.. <img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          DNS Automation Lookup 
        </p>
        <input type="text" placeholder="Domain" />
          <select name="records" id="records-id">
          <option value="mx"> MX Record</option>
          <option value="mx"> TXT Record</option>
          <option value="mx"> CNAME Record</option>
          
          </select>
        <button> Search Records</button>
      </header>
    </div>
  );
}

export default App;
