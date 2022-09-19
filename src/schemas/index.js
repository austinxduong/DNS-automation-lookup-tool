import * as yup from "yup";

export const initSchema = yup.object().shape({
    domain: yup.string().required("Please enter a valid domain"),
})
export const recordSchema = yup.object().shape({
    records: yup.string().required("Please select a record"),
    recordType: yup
    .string()
    .oneOf(["MX, TXT, CNAME"])
    .required("required"),
})