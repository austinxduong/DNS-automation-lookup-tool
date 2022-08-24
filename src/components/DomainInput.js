import React from 'react';
import './DomainInput.js';
import './DomainInput.css';

const DomainInput = (props) => {
  return (
    <div>
    <body>
        <form id="form" method="get" action="/action_page.php">
          <input type="text" alt="domain_input_field" placeholder={props.placeholder} required/>
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
  )
}

export default DomainInput


