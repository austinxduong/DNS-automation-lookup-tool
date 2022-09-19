import React from 'react'
import {  Form, Formik } from 'formik'
import { recordSchema } from "../schemas"
import RecordType from './RecordType'

const RecordSelect = () => {
  return (
    <Formik initialValues={{ records: "", recordType:"" }}
    validationSchema={recordSchema}
    >
    {(props) => (
        <Form> 
            <RecordType 
                label="Record Type"
                name="recordType"
                placeholder="Select Record"
            >
                <option value=""> Select a Record Type</option>
                <option value="MX"> MX</option>
                <option value="TXT"> TXT</option>
                <option value="CNAME"> CNAME</option>
            </RecordType>
            {/* <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.domain}
                name="domain"
            /> */}
        </Form>
    )}
    </Formik>
  )
}

export default RecordSelect