import * as yup from "yup";

export const feedbackValidationSchema = yup.object().shape({
  suggestion: yup
    .string()
    .required("Your suggestion is required")
    .min(3, "Suggestion must be at least 3 characters long")
    .matches(
      /^[A-Za-z0-9-_,. ]+$/,
      "Suggestion cannot have invalid characters"
    ),
  features: yup
    .array()
    .of(yup.string().required("Please select at least one feature request"))
    .min(1, "Please select at least one feature request"),
});
