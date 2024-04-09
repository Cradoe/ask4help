import { clientRequest } from "./clientRequest.service";

export const userClientRequest = {
  getOne: (userId: string) => clientRequest().get(`users/${userId}`),

  getCountries: () => clientRequest().get("/country"),

  getInterests: () => clientRequest().get("/interest"),

  miniSearch: (query: string) =>
    clientRequest().get(`/users/search?limit=5&searchQuery=${query}`),

  search: (query: string) =>
    clientRequest().get(`/users/search?searchQuery=${query}`),
};
