import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import {
  basicUserDetailsValidationSchema,
  bioValidationSchema,
  changePasswordValidationSchema,
  interestValidationSchema,
  phoneValidationSchema,
  socialHandlesValidationSchema,
  waitlistValidationSchema,
} from "validations";

export const accountClientRequest = {
  joinWaitlist: (payload: InferType<typeof waitlistValidationSchema>) =>
    clientRequest().post({ url: "/api/waitlist", payload }),

  accountDetails: () => clientRequest().get("users/account"),

  changePassword: (payload: InferType<typeof changePasswordValidationSchema>) =>
    clientRequest().patch({ url: "/users/account/change-password", payload }),

  updatePhoneNumber: (payload: InferType<typeof phoneValidationSchema>) =>
    clientRequest().patch({ url: "/users/account/phone-number", payload }),

  editBasicDetails: (
    payload: InferType<typeof basicUserDetailsValidationSchema>
  ) => clientRequest().patch({ url: "/users/account/basic", payload }),

  editBio: (payload: InferType<typeof bioValidationSchema>) =>
    clientRequest().patch({ url: "/users/account/bio", payload }),

  getSocialHandles: (userId?: string) => {
    if (userId) {
      return clientRequest().get(`users/account/social-media/${userId}`);
    } else {
      return clientRequest().get("users/account/social-media");
    }
  },

  updateSocialHandles: (
    payload: InferType<typeof socialHandlesValidationSchema>
  ) => clientRequest().post({ url: "/users/account/social-media", payload }),

  getUserInterests: (userId?: string) => {
    if (userId) {
      return clientRequest().get(`users/account/interests/${userId}`);
    } else {
      return clientRequest().get("users/account/interests");
    }
  },

  updateUserInterests: (payload: InferType<typeof interestValidationSchema>) =>
    clientRequest().post({ url: "/users/account/interests", payload }),

  closeAccount: () =>
    clientRequest().delete({ url: "/users/account/close-account" }),
};
