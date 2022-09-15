import { useFormik } from "formik";
import { initSchema } from "../schemas";
import './FormInput.css';

const onSubmit = () => {
    console.log("submitted")
}

const FormInput = () => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            domain: "",
        },
        validationSchema: initSchema,
        onSubmit
    });

    console.log(errors)

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="domain">Domain</label>
        <input  
            value={values.domain}
            onChange={handleChange}
            id="domain"         
            type="domain" 
            placeholder="www.xyx.com" 
            onBlur={handleBlur} 
            className={errors.domain && touched.domain ? "domain-input-error" : ""}
            />
            {errors.domain && touched.domain && <p className="input-error-message">{errors.domain}</p>}
        <button type="submit"> Search Records </button>
    </form>
  )
}

export default FormInput
