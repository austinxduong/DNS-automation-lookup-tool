import React from 'react'
import { Field, Form, Formik } from 'formik'

const RecordSelect = () => {
  return (
    <Formik initialValues={{ records: "" }}>
    {(props) => (
        <Form> 
            <Field type="text" name="records" placeholder="records" />
            <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.domain}
                name="domain"
            />
        </Form>
    )}
    </Formik>
  )
}

export default RecordSelect