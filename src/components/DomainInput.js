import React from 'react';
import './DomainInput.js';
import './DomainInput.css';

const DomainInput = (props) => {

  return (
    <div>
      <body>
        <input type="text" alt="domain_input_field" placeholder={props.placeholder} ref={props.refer} required />
          <select name="records" id="records-id">
          <option value="mx"> MX Record</option>
          <option value="mx"> TXT Record</option>
          <option value="mx"> CNAME Record</option>
          <input type="submit"></input>
          </select>
        </body>
    </div>
  );
}

export default DomainInput;


