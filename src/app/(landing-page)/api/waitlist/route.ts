import { sendErrorResponse, sendSuccessResponse } from "lib/api-response";
import { saveToGoogleSheet } from "lib/google-sheet";

export async function POST(req: Request) {
  try {
    const { fullname, email, userType, country } = await req.json();

    if (!fullname || !email || !userType || !country) {
      return sendErrorResponse("All fields are required.", 400);
    }

    const data = [fullname, email, country, userType];

    const saved = await saveToGoogleSheet(data);

    if (saved) {
      return sendSuccessResponse("Data saved successfully.", 201);
    } else {
      return sendErrorResponse(
        "Oops, something went wrong! Please try again.",
        500
      );
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return sendErrorResponse("Internal server error.", 500);
  }
}
