import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import {
  forgotPasswordValidationSchema,
  loginValidationSchema,
  resetPasswordValidationSchema,
  signupValidationSchema,
} from "validations";

export const authClientRequest = {
  login: (payload: InferType<typeof loginValidationSchema>) =>
    clientRequest().post({ url: "auth/login", payload }),

  register: (payload: InferType<typeof signupValidationSchema>) =>
    clientRequest().post({ url: "auth/register", payload }),

  resendEmailVerification: (payload: { email: string }) =>
    clientRequest().post({ url: "auth/verify-email/request", payload }),

  verifyAccount: (payload: { email: string; verificationCode: string }) =>
    clientRequest().post({ url: "auth/verify-email", payload }),

  forgotPassword: (payload: InferType<typeof forgotPasswordValidationSchema>) =>
    clientRequest().post({ url: "auth/forgot-password", payload }),

  resetPassword: (payload: InferType<typeof resetPasswordValidationSchema>) =>
    clientRequest().post({ url: `auth/reset-password`, payload }),
};
