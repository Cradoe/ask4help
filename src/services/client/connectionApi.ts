import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { connectRequestValidationSchema } from "validations";

export const connectionClientRequest = {
  myConnections: () => clientRequest().get(`connections`),

  countConnections: (userId?: string) => {
    if (userId) {
      return clientRequest().get(`connections/count/${userId}`);
    } else {
      return clientRequest().get(`connections/count`);
    }
  },

  findConnectionStatus: (userId: string) =>
    clientRequest().get(`connections/${userId}/find-connection-status`),

  pendingInvitations: () =>
    clientRequest().get(`connections/invitations/received`),

  sentInvitations: () => clientRequest().get(`connections/invitations/sent`),

  suggestions: () => clientRequest().get(`connections/suggestions`),

  connectRequest: (payload: InferType<typeof connectRequestValidationSchema>) =>
    clientRequest().post({ url: `connections/request`, payload }),

  acceptRequest: (connectionId: string) =>
    clientRequest().patch({
      url: `connections/invitations/${connectionId}/accept`,
    }),

  rejectRequest: (connectionId: string) =>
    clientRequest().patch({
      url: `connections/invitations/${connectionId}/reject`,
    }),

  withdrawRequest: (connectionId: string) =>
    clientRequest().patch({
      url: `connections/invitations/${connectionId}/withdraw`,
    }),
};
