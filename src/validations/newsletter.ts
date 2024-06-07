import * as yup from "yup";

export const waitlistValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("Please enter your full name")
    .min(3, "Full name must be at least 3 characters long"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Email must be a valid email"
    ),
  country: yup.string().required("Please select your location"),
  userType: yup.string().required("Please select where you belong"),
});
