import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { sopReviewTaskValidationSchema } from "validations";

export const taskClientRequest = {
  createTask: (payload: InferType<typeof sopReviewTaskValidationSchema>) =>
    clientRequest().post({ url: "tasks/sop", payload }),

  getAll: () => clientRequest().get("task/sop"),
};
