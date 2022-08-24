// import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';
import DomainInput from './components/DomainInput';

function App() {

  const [domain, setDomain] = useState("")
const domainInputRef = useRef()

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(domainInputRef)
}


  return (
    <div className="App">
      <header className="App-header">
      DNS Automation Lookup 
        { /* play with three.js or SVG....?  hmm.. <img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <div class ="search"> {domain} </div>
        <form id="form" method="get" action="/action_page.php" onSubmit={handleSubmit} onChange={e => setDomain(e.target.value)}>
          <DomainInput placeholder="Domain" refer={domainInputRef} />
          <button> Search Records</button>
        </form>
    </div>
  );
}

export default App;
