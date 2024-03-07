import { SOCIAL_MEDIAS } from "lib/enum";
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
