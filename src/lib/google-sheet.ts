import jwt from "jsonwebtoken";

const getGoogleSheetsAccessToken = async () => {
  const jwtToken = getJwtToken();

  const accessToken = await getOuth2AccessToken(jwtToken);
  return accessToken;
};

const getJwtToken = (): string => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;
  const token = jwt.sign(
    {
      iss: process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://accounts.google.com/o/oauth2/token",
      exp,
      iat,
    },
    process.env.GOOGLE_SHEETS_PRIVATE_KEY!,
    { algorithm: "RS256" }
  );

  return token;
};

const getOuth2AccessToken = async (jwtToken: string): Promise<string> => {
  const { access_token: accessToken } = await fetch(
    "https://accounts.google.com/o/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwtToken,
      }),
    }
  ).then((response) => response.json());

  return accessToken;
};

export const saveToGoogleSheet = async (
  data: string[]
): Promise<{ success: boolean; message?: string }> => {
  const accessToken = await getGoogleSheetsAccessToken();

  // Check for duplicates
  if (await isDuplicateData(data)) {
    return {
      success: false,
      message: "Opps! Looks like you're already on our waitlist.",
    };
  }

  // add data to google sheet
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_SUBSCRIBERS_ID}/values/${process.env.GOOGLE_SHEETS_SUBSCRIBERS_PAGE}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        range: process.env.GOOGLE_SHEETS_SUBSCRIBERS_PAGE,
        values: [data],
      }),
    }
  );

  if (response.ok) {
    // The request was successful
    return { success: true };
  } else {
    // The request failed
    const errorData = await response.json();
    console.error("Error appending data:", errorData);
    return {
      success: false,
      message: "Error saving information. Please try again.",
    };
  }
};

const isDuplicateData = async (data: string[]): Promise<boolean> => {
  const accessToken = await getGoogleSheetsAccessToken();

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_SUBSCRIBERS_ID}/values/${process.env.GOOGLE_SHEETS_SUBSCRIBERS_PAGE}?valueRenderOption=FORMATTED_VALUE`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.ok) {
    const sheetData = await response.json();
    const existingData = sheetData.values || [];

    const isDuplicate = existingData.some((existingRow: any) => {
      return JSON.stringify(existingRow) === JSON.stringify(data);
    });

    return isDuplicate;
  } else {
    console.error("Error fetching existing data:", await response.json());
    return true; // Assume duplicate to prevent appending on error
  }
};
