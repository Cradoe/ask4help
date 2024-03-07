import * as yup from "yup";

export const eduBackgroundValidationSchema = yup.object().shape({
  qualificationId: yup.string().required("Please select a value"),
  facultyId: yup.string().required("Please select a value"),
  classOfDegreeId: yup.string().required("Please select a value"),
  graduationYear: yup
    .string()
    .required("Graduation year is required")
    .test("graduationYear", "Graduation year must be in the past", (value) => {
      const currentYear = new Date().getFullYear();

      return Number(value) < Number(currentYear);
    }),
});

export const eduGoalsValidationSchema = yup.object().shape({
  qualificationId: yup.string().required("Please select a value"),
  facultyId: yup.string().required("Please select a value"),
  preferredDestinations: yup.mixed(),
  interests: yup.mixed(),
});
