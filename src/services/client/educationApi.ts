import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import {
  eduBackgroundValidationSchema,
  eduGoalsValidationSchema,
} from "validations";

export const educationClientRequest = {
  getQualifications: () => clientRequest().get(`educations/qualifications`),
  getFaculties: () => clientRequest().get(`educations/faculties`),
  getClassOfDegrees: () => clientRequest().get(`educations/class-of-degree`),

  // education background
  getEducationBackground: (userId?: string) => {
    if (userId) {
      return clientRequest().get(`educations/${userId}/background`);
    } else {
      return clientRequest().get(`educations/background`);
    }
  },

  saveEducationBackground: (
    payload: InferType<typeof eduBackgroundValidationSchema>
  ) => clientRequest().post({ url: `educations/background`, payload }),

  editEducationBackground: (
    id: string,
    payload: InferType<typeof eduBackgroundValidationSchema>
  ) => clientRequest().patch({ url: `educations/background/${id}`, payload }),

  // education goal
  getEducationGoal: (userId?: string) => {
    if (userId) {
      return clientRequest().get(`educations/${userId}/goal`);
    } else {
      return clientRequest().get(`educations/goal`);
    }
  },

  saveEducationGoal: (payload: InferType<typeof eduGoalsValidationSchema>) =>
    clientRequest().post({ url: `educations/goal`, payload }),

  editEducationGoal: (
    id: string,
    payload: InferType<typeof eduGoalsValidationSchema>
  ) => clientRequest().patch({ url: `educations/goal/${id}`, payload }),
};
