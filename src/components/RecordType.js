import { Form, Formik } from "formik";
import CustomSelect from '../components/CustomSelect'
import { recordSchema } from "../schemas";



const RecordType = () => {

  return (
     <Formik initialValues={{ recordType: "",  }}
     validationSchema={recordSchema}
     >
       {(props) => (
         <Form>
            <CustomSelect
                label= "recordSchema"
                name= "recordType"
                placeholder="Select a record"
            >
                <option value="">Please select a record</option> 
                <option value="MX">MX</option> 
                <option value="TXT">TXT</option> 
                <option value="CNAME">CNAME</option> 
                <option value="SSL Certificate">SSL Certificate</option> 
                </CustomSelect>
           </Form>
       )}
     </Formik>

  )
}

export default RecordType