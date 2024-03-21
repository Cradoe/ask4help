import * as yup from "yup";

export const sopReviewTaskValidationSchema = yup
  .object()
  .shape({
    title: yup
      .string()
      .required("Please enter the title")
      .min(3, "Title must be at least 3 characters long")
      .matches(/^[A-Za-z0-9-_,. ]+$/, "Title cannot have invalid characters"),
    description: yup
      .string()
      .required("Please enter a description")
      .min(3, "Description must be at least 3 characters long")
      .matches(
        /^[A-Za-z0-9-_,. ]+$/,
        "Description cannot have invalid characters"
      ),
    quantity: yup
      .string()
      .required("How many SOPs do you want to receive?")
      .matches(/^[0-9]+$/, "Quantity can only be in digits"),
    collectionStartDate: yup
      .string()
      .required("When do you want to start receiving SOPs?")
      .test(
        "collectionStartDate",
        "Collection start date cannot be in the past",
        (value) => {
          const today = new Date();

          return new Date(value) >= today;
        }
      ),
    collectionEndDate: yup
      .string()
      .required("When do you want to stop receiving SOPs?")
      .test(
        "collectionEndDate",
        "Collection end date cannot be in the past",
        (value) => {
          const today = new Date();

          return new Date(value) >= today;
        }
      ),
    returnStartDate: yup
      .string()
      .required("When do you want to start returning the SOPs?")
      .test(
        "returnStartDate",
        "Return start date cannot be in the past",
        (value) => {
          const today = new Date();

          return new Date(value) >= today;
        }
      ),
    returnEndDate: yup
      .string()
      .required("When do you want to stop receiving SOPs?")
      .test(
        "returnEndDate",
        "Return end date cannot be in the past",
        (value) => {
          const today = new Date();

          return new Date(value) >= today;
        }
      ),
  })
  .test("check-collection-date", "", function (values) {
    const { collectionStartDate, collectionEndDate } = values;

    if (new Date(collectionEndDate) < new Date(collectionStartDate)) {
      throw new yup.ValidationError(
        "Collection end date cannot be before the start date",
        values,
        "collectionEndDate"
      );
    }

    // No error if validation passes
    return true;
  })
  .test("check-return-date", "", function (values) {
    const { returnStartDate, returnEndDate } = values;

    if (new Date(returnEndDate) < new Date(returnStartDate)) {
      throw new yup.ValidationError(
        "Return end date cannot be before the start date",
        values,
        "returnEndDate"
      );
    }

    // No error if validation passes
    return true;
  })
  .test("check-collection-return-date", "", function (values) {
    const { returnStartDate, collectionStartDate } = values;

    if (new Date(returnStartDate) < new Date(collectionStartDate)) {
      throw new yup.ValidationError(
        "Return start date cannot be before collection start date",
        values,
        "returnStartDate"
      );
    }

    // No error if validation passes
    return true;
  });
