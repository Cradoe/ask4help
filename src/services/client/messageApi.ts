import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { sendMessageValidationSchema } from "validations";

export const messageClientRequest = {
  sendMessage: (payload: InferType<typeof sendMessageValidationSchema>) =>
    clientRequest().post({ url: "messages", payload }),

  getChatLists: () => clientRequest().get("real-time/chat/list"),
};
