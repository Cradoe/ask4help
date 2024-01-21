import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Email must be a valid email"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  rememberMe: yup.boolean().notRequired(),
});

export const forgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Email must be a valid email"
    ),
});

export const resetPasswordValidationSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export const signupValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("Your fullname is required")
    .min(3, "Fullname must be at least 3 characters long"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Email must be a valid email"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  role: yup.string(),
});
