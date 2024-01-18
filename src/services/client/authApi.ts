import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { loginValidationSchema } from "validations";

export const authClientRequest = {
  login: (payload: InferType<typeof loginValidationSchema>) =>
    clientRequest().post({ url: "auth/login", payload }),
};
