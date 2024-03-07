import * as yup from "yup";

export const workExperienceValidationSchema = yup.object().shape({
  position: yup
    .string()
    .required("The position/job role is required")
    .min(3, "Position must be at least 3 characters long")
    .matches(/^[A-Za-z0-9-_,. ]+$/, "Position cannot have invalid characters"),
  company: yup
    .string()
    .required("The company name is required")
    .min(3, "Company name must be at least 3 characters long")
    .matches(
      /^[A-Za-z0-9-_,. ]+$/,
      "Company name cannot have invalid characters"
    ),
});
