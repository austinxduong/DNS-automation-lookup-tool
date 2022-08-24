// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import DomainInput from './components/DomainInput';

function App() {

  const [domain, setDomain] = useState("")
  console.log(domain)

  return (
    <div className="App">
      <header className="App-header">
      DNS Automation Lookup 
        { /* play with three.js or SVG....?  hmm.. <img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <DomainInput placeholder="Domain" setDomain={setDomain}/>
    </div>
  );
}

export default App;
