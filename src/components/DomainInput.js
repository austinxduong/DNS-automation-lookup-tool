import React from 'react';
import './DomainInput.css';

const DomainInput = (props) => {

  return (
    <div>
      <body>
        <input type="text" id ="records-input" alt="domain_input_field" placeholder={props.placeholder} ref={props.refer} required />
          <select required name="records" id="records-id">
            <option value="--" selected="selected">None</option>
            <option value="mx"> MX Record</option>
            <option value="txt" > TXT Record</option>
            <option value="cname" > CNAME Record</option>
          <input type="submit"></input>
          </select>
        </body>
    </div>
  );
}

export default DomainInput;


