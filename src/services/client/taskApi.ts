import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { sopReviewTaskValidationSchema } from "validations";

export const taskClientRequest = {
  createTask: (payload: InferType<typeof sopReviewTaskValidationSchema>) =>
    clientRequest().post({ url: "sop/tasks", payload }),

  getAll: () => clientRequest().get("sop/tasks"),

  getUserActiveSopTask: (userId: string) =>
    clientRequest().get(`sop/tasks/${userId}/active`),

  uploadSop: (sopId: string, payload: FormData) =>
    clientRequest().post({ url: `sop/${sopId}/upload`, payload }),
};
