import { accountClientRequest } from "./accountApi";
import { authClientRequest } from "./authApi";
import { connectionClientRequest } from "./connectionApi";
import { educationClientRequest } from "./educationApi";
import { messageClientRequest } from "./messageApi";
import { userClientRequest } from "./userApi";

export const clientRequest = {
  auth: authClientRequest,
  account: accountClientRequest,
  message: messageClientRequest,
  user: userClientRequest,
  education: educationClientRequest,
  connection: connectionClientRequest,
};
