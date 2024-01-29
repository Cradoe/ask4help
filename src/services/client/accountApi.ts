import { InferType } from "yup";
import { clientRequest } from "./clientRequest.service";
import { waitlistValidationSchema } from "validations";

export const accountClientRequest = {
  joinWaitlist: (payload: InferType<typeof waitlistValidationSchema>) =>
    clientRequest().post({ url: "/api/waitlist", payload }),
};
