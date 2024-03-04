import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import {
  basicUserDetailsValidationSchema,
  bioValidationSchema,
  socialHandlesValidationSchema,
  waitlistValidationSchema,
} from "validations";

export const accountClientRequest = {
  joinWaitlist: (payload: InferType<typeof waitlistValidationSchema>) =>
    clientRequest().post({ url: "/api/waitlist", payload }),

  accountDetails: () => clientRequest().get("users/account"),

  editBasicDetails: (
    payload: InferType<typeof basicUserDetailsValidationSchema>
  ) => clientRequest().patch({ url: "/users/account/basic", payload }),

  editBio: (payload: InferType<typeof bioValidationSchema>) =>
    clientRequest().patch({ url: "/users/account/bio", payload }),

  getSocialHandles: () => clientRequest().get("users/account/social-media"),

  updateSocialHandles: (
    payload: InferType<typeof socialHandlesValidationSchema>
  ) => clientRequest().post({ url: "/users/account/social-media", payload }),
};
