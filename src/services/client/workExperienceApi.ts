import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { workExperienceValidationSchema } from "validations";

export const workExperienceClientRequest = {
  getExperiences: (userId?: string) => {
    if (userId) {
      return clientRequest().get(`work-experience/${userId}`);
    } else {
      return clientRequest().get(`work-experience`);
    }
  },

  saveWorkExperience: (
    payload: InferType<typeof workExperienceValidationSchema>
  ) => clientRequest().post({ url: `work-experience`, payload }),

  editWorkExperience: (
    id: string,
    payload: InferType<typeof workExperienceValidationSchema>
  ) => clientRequest().patch({ url: `work-experience/${id}`, payload }),
};
