import { clientRequest } from "./clientRequest.service";

export const userClientRequest = {
  getOne: (userId: string) => clientRequest().get(`users/${userId}`),

  getCountries: () => clientRequest().get("/country"),

  getInterests: () => clientRequest().get("/interest"),
};
