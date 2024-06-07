import { clientRequest } from "./clientRequest.service";

export const messageClientRequest = {
  uploadAttachment: (payload: FormData) =>
    clientRequest().post({ url: "real-time/chat/upload", payload }),

  getChatLists: (query?: string) => {
    if (query) {
      return clientRequest().get(`real-time/chat/list?query=${query}`);
    } else {
      return clientRequest().get("real-time/chat/list");
    }
  },
};
