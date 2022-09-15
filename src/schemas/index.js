import * as yup from "yup";

export const initSchema = yup.object().shape({
    domain: yup.string().required("Please enter a valid domain"),
    recordType: yup
        .string()
        .oneOf(["MX, TXT, CNAME, SSL CERTIFICATE"])
        .required()
})