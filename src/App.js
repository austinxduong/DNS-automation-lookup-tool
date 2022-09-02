// import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';
import DomainInput from './components/DomainInput';
import Header from './components/Header';

function App() {

const [domain, setDomain] = useState("")
// const [record, setRecord] = useState(null);
const domainInputRef = useRef()

// function getRecordType() {
//   switch(record) {
//     case "cname":
//       return <input type="text" placeholder="account_number"></input>
//     default:
//       return null;
//   }
// }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(domainInputRef)
}


  return (
    <div className="App">
      <Header />
      <body>
        <div class ="search"> {domain} </div>
          <form id="form" method="get" action="/action_page.php" onSubmit={handleSubmit} onChange={e => setDomain(e.target.value)}>
            <DomainInput placeholder="Domain" id="domain-input-placeholder" refer={domainInputRef} />
            <button> Search Records</button>
            {/* {getRecordType()} */}
          </form>
      </body>

      <footer> </footer>
    </div>
  );
}

export default App;
