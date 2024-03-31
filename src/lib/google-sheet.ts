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
