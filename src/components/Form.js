import React from "react";
import { useRef, useState } from 'react';
import '../components/Form.css'
import DomainInput from "./DomainInput"



const Form = () => {

const [domain, setDomain] = useState("")
const domainInputRef = useRef()
// const [record, setRecord] = useState(null);



const handleSubmit = (e) => {
    e.preventDefault();
    console.log(domainInputRef)
    }



    return(
        <div>
            <div class ="search"> {domain} </div>
                <form id="form" method="get" action="/action_page.php" onSubmit={handleSubmit} onChange={e => setDomain(e.target.value)}>
                    <DomainInput placeholder="Domain" id="domain-input-placeholder" refer={domainInputRef} />
                        <button> Search Records</button>
                    {/* {getRecordType()} */}
                </form>
        </div>
    );
}

export default Form;