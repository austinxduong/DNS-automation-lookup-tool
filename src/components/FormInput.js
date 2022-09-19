

import { useFormik } from "formik";
import { initSchema } from "../schemas";
import './FormInput.css';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise ((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
}

const FormInput = () => {
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
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
            disabled={isSubmitting}  
            value={values.domain}
            onChange={handleChange}
            id="domain"         
            type="domain" 
            placeholder="www.xyx.com" 
            onBlur={handleBlur} 
            className={errors.domain && touched.domain ? "domain-input-error" : ""}
            />
            {errors.domain && touched.domain && <p className="input-error-message">{errors.domain}</p>}
        <button disabled={isSubmitting} type="submit"> Search Records </button>
    </form>
  )
}

export default FormInput