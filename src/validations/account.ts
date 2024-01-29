import * as yup from "yup";

export const eduBackgroundValidationSchema = yup.object().shape({
  highestQualification: yup.string().required("Please select a value"),
  fieldOfStudy: yup.string().required("Please select a value"),
  classOfDegree: yup.string().required("Please select a value"),
  graduationYear: yup
    .string()
    .required("Graduation year is required")
    .test("graduationYear", "Graduation year must be in the past", (value) => {
      const currentYear = new Date().getFullYear();

      return Number(value) < Number(currentYear);
    }),
});

export const eduGoalsValidationSchema = yup.object().shape({
  fieldOfInterest: yup.string().required("Please select a value"),
  intendedStudyLevel: yup.string(),
  preferredCountry: yup.string(),
  interests: yup.mixed().required("Please pick at least one interest"),
});
