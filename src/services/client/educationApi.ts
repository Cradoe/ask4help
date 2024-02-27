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
  getMyEducationBackground: () => clientRequest().get(`educations/background`),
  saveEducationBackground: (
    payload: InferType<typeof eduBackgroundValidationSchema>
  ) => clientRequest().post({ url: `educations/background`, payload }),
  getUserEducationBackground: (userId: string) =>
    clientRequest().get(`educations/${userId}/background`),

  // education goal
  getMyEducationGoal: () => clientRequest().get(`educations/goal`),
  saveEducationGoal: (payload: InferType<typeof eduGoalsValidationSchema>) =>
    clientRequest().post({ url: `educations/goal`, payload }),
  getUserEducationGoal: (userId: string) =>
    clientRequest().get(`educations/${userId}/goal`),
};
