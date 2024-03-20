import { clientRequest } from "./clientRequest.service";

export const notificationClientRequest = {
  getAll: (pageParam: number) =>
    clientRequest().get(`notification?cursor=${pageParam}`),

  markAllAsRead: () =>
    clientRequest().patch({ url: `notification/mark-as-read` }),

  delete: (notificationId: string) =>
    clientRequest().delete({ url: `notification/${notificationId}` }),
};
