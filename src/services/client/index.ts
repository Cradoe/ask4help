import { accountClientRequest } from "./accountApi";
import { authClientRequest } from "./authApi";
import { messageClientRequest } from "./messageApi";

export const clientRequest = {
  auth: authClientRequest,
  account: accountClientRequest,
  message: messageClientRequest,
};
