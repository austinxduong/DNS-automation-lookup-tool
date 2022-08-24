// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      DNS Automation Lookup 
        { /* play with three.js or SVG....?  hmm.. <img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <body>
      <p>
        </p>
        <form id="form" method="get" action="/action_page.php">
          <input type="text" alt="domain_input_field" placeholder="Domain" required/>
            <select name="records" id="records-id">
            <option value="mx"> MX Record</option>
            <option value="mx"> TXT Record</option>
            <option value="mx"> CNAME Record</option>
            <input type="submit"></input>
            </select>
          </form>
      </body>
      <button> Search Records</button>
    </div>
  );
}

export default App;
