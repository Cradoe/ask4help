import * as yup from "yup";

export const connectRequestValidationSchema = yup.object().shape({
  userId: yup.string().required("Please select a user"),
});
