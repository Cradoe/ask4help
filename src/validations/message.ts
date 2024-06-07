import * as yup from "yup";

export const sendMessageValidationSchema = yup.object().shape({
  content: yup.string().required(),
  mimeType: yup.string().optional(),
});
