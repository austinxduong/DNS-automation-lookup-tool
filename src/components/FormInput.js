import { useFormik } from "formik";
import './FormInput.css';


const FormInput = () => {
    const formik = useFormik({
        initialValues: {
            domain: "",
        },
    });

    console.log(formik);

  return (
    <form autoComplete="off">
        <label htmlFor="domain">Domain</label>
        <input  
            value={formik.values.domain}
            onChange={formik.handleChange}
            id="domain"         
            type="domain" 
            placeholder="www.xyx.com" 
            onBlur={formik.handleBlur} />
        <button type="submit"> Submit </button>
    </form>
  )
}

export default FormInput
