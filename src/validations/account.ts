import * as yup from "yup";

export const basicUserDetailsValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Your first name is required")
    .min(3, "First name must be at least 3 characters long"),
  lastName: yup
    .string()
    .required("Your first name is required")
    .min(3, "First name must be at least 3 characters long"),
  location: yup
    .string()
    .required("Your location is required")
    .min(3, "Location must be at least 3 characters long")
    .matches(/^[A-Za-z0-9-_,. ]+$/, "Location cannot have invalid characters"),
  jobTitle: yup
    .string()
    .required("Your location is required")
    .min(3, "Location must be at least 3 characters long")
    .matches(/^[A-Za-z0-9-. ]+$/, "Job title cannot have invalid characters"),
});

export const bioValidationSchema = yup.object().shape({
  bio: yup
    .string()
    .required("Your bio is required")
    .min(3, "Bio must be at least 3 characters long"),
});

export const socialHandlesValidationSchema = yup.object().shape({
  facebook: yup.string(),
  linkedIn: yup.string(),
  twitter: yup.string(),
  youtube: yup.string(),
});

export const interestValidationSchema = yup.object().shape({
  interests: yup.mixed(),
});

export const phoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\+(?:[0-9] ?){6,14}[0-9]$/,
      "Invalid phone number. Please use the international format e.g +2348000000000 or +1 5551234567"
    ),
});

export const changePasswordValidationSchema = yup
  .object()
  .shape({
    currentPassword: yup.string().required("Current password is required"),
    newPassword: yup
      .string()
      .required("Current password is required")
      .min(8, "Current password must be at least 8 characters"),
    confirmNewPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  })
  .test("check-password", "", function (values) {
    const { currentPassword, newPassword } = values;

    if (currentPassword === newPassword) {
      throw new yup.ValidationError(
        "Old password and new password cannot be the same",
        values,
        "newPassword"
      );
    }

    // No error if validation passes
    return true;
  });
