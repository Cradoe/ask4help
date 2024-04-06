import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { sendMessageValidationSchema } from "validations";

export const messageClientRequest = {
  sendMessage: (payload: InferType<typeof sendMessageValidationSchema>) =>
    clientRequest().post({ url: "messages", payload }),

  getChatLists: (query?: string) => {
    if (query) {
      return clientRequest().get(`real-time/chat/list?query=${query}`);
    } else {
      return clientRequest().get("real-time/chat/list");
    }
  },
};
