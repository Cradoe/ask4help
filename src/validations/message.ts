import * as yup from "yup";

export const sendMessageValidationSchema = yup.object().shape({
  message: yup.string().required(),
});
