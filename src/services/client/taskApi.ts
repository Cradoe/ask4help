import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import {
  editSopValidationSchema,
  sopReviewTaskValidationSchema,
} from "validations";

export const taskClientRequest = {
  createTask: (payload: InferType<typeof sopReviewTaskValidationSchema>) =>
    clientRequest().post({ url: "sop/tasks", payload }),

  getAll: (page?: number) => clientRequest().get(`sop/tasks?page=${page}`),

  getOne: (taskId: string) => clientRequest().get(`sop/tasks/${taskId}`),

  getUserActiveSopTask: (userId: string) =>
    clientRequest().get(`sop/${userId}/tasks/active`),

  getSopTaskDocuments: (sopTaskId: string, page?: number) =>
    clientRequest().get(`sop/tasks/${sopTaskId}/documents?page=${page}`),

  getOneSopTaskDocument: (documentId: string) =>
    clientRequest().get(`sop/documents/${documentId}`),

  uploadSop: (sopTaskId: string, payload: FormData) =>
    clientRequest().post({ url: `sop/upload/${sopTaskId}`, payload }),

  saveSopReview: (
    documentId: string,
    payload: InferType<typeof editSopValidationSchema>
  ) => clientRequest().patch({ url: `sop/review/${documentId}`, payload }),

  myReviewedSOP: () => clientRequest().get(`sop/review/completed`),
};
