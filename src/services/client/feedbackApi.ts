import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { feedbackValidationSchema } from "validations";

export const feedbackClientRequest = {
  getProposedFeatures: () => clientRequest().get(`feedbacks/proposed-features`),

  saveFeedback: (payload: InferType<typeof feedbackValidationSchema>) =>
    clientRequest().post({ url: `feedbacks`, payload }),
};
