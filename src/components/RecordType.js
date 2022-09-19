import { useField } from "formik";

import React from 'react'

const RecordType = ({ label, ...props }) => {
    const [field, meta] = useField(props);

  return (
    <>
    <label>{label}</label>
    <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "select-error": ""}
        />
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  )
}

export default RecordType