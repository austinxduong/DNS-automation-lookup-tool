// import logo from './logo.svg';
// import { useRef, useState } from 'react';
import './App.css';
// import Form from './components/Form'
import FormInput from './components/FormInput';
import Header from './components/Header';
// import Footer from './components/Footer'

function App() {



// function getRecordType() {
//   switch(record) {
//     case "cname":
//       return <input type="text" placeholder="account_number"></input>
//     default:
//       return null;
//   }
// }

  return (
    <div className="App">
      <Header />
        <body>
          <FormInput />
        </body>

        <footer> 
        </footer>
    </div>
  );
}

export default App;
