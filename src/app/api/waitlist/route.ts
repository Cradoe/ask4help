import { sendErrorResponse, sendSuccessResponse } from "lib/api-response";
import { saveToGoogleSheet } from "lib/google-sheet";
import { toSentenceCase } from "lib/util";
import validator from "validator";

export async function POST(req: Request) {
  try {
    const { fullname, email, userType, country } = await req.json();

    if (!fullname || !email || !userType || !country) {
      return sendErrorResponse("All fields are required.", 400);
    }

    // Clean and sanitize input data
    const cleanedFullname = toSentenceCase(fullname.trim());
    const cleanedEmail = email.trim().toLowerCase();
    const cleanedCountry = country.trim();
    const cleanedUserType = userType.trim().toLowerCase();

    // Validate email format
    if (!validator.isEmail(cleanedEmail)) {
      return sendErrorResponse("Invalid email address.", 400);
    }

    const createdAt = new Date();

    const data = [
      cleanedFullname,
      cleanedEmail,
      cleanedCountry,
      cleanedUserType,
      createdAt,
    ];

    const response = await saveToGoogleSheet(data);

    if (response.success) {
      return sendSuccessResponse("Data saved successfully.", 201);
    } else {
      return sendErrorResponse(
        response?.message || "Oops, something went wrong! Please try again.",
        403
      );
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return sendErrorResponse("Internal server error.", 500);
  }
}
