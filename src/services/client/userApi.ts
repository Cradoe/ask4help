import { clientRequest } from "./clientRequest.service";

export const userClientRequest = {
  getOne: (userId: string) => clientRequest().get(`users/${userId}`),

  getCountries: () => clientRequest().get("/country"),

  getInterests: () => clientRequest().get("/interest"),
  getAdvisorInterests: () => clientRequest().get("/interest/advisor"),

  miniSearch: (query: string) =>
    clientRequest().get(`/users/search?limit=5&searchQuery=${query}`),

  search: ({ query, interests }: { query?: string; interests?: string }) => {
    let searchParams = "search=true";
    if (query) {
      searchParams += `&searchQuery=${query}`;
    }

    if (interests) {
      searchParams += `&interests=${interests}`;
    }

    return clientRequest().get(`/users/search?${searchParams}`);
  },
};
