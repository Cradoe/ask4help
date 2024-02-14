import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { sendMessageValidationSchema } from "validations";

export const messageClientRequest = {
  sendMessage: (payload: InferType<typeof sendMessageValidationSchema>) =>
    clientRequest().post({ url: "messages", payload }),

  getChat: (recepientId: string) =>
    clientRequest().get(`messages/${recepientId}`),
};
