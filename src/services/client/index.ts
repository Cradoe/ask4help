import { accountClientRequest } from "./accountApi";
import { authClientRequest } from "./authApi";

export const clientRequest = {
  auth: authClientRequest,
  account: accountClientRequest,
};
