import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie } from "lib/cookie";
import { toast } from "react-hot-toast";

const service = (baseURL = "") => {
  const service = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Methods": "*",
    },
  });

  service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // get token from cookie
    const token = getCookie("token");
    if (token) {
      // if token is present, add it to headers as Authorization
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  service.interceptors.response.use(
    (response: AxiosResponse) => {
      const responseData = response?.data;
      return responseData;
    },
    (error: AxiosError) => {
      if (error?.response === undefined) {
        return Promise.reject("No internet connection");
      } else {
        const errors = error?.response?.data;

        // check if statusCode is 401, unauthorized
        // @ts-ignore
        if (errors?.statusCode === 401) {
          location.href = "/login";
          return;
          // @ts-ignore
        }

        // @ts-ignore
        let serverErrors = errors?.errors;
        if (serverErrors) {
          // loop through serverErrors object and display value of each key
          Object.keys(serverErrors).forEach((key) => {
            const error = serverErrors[key];
            if (Array.isArray(error)) {
              error.forEach((err) => {
                toast.error(err?.message || `Error with ${serverErrors[key]}`);
              });
            } else {
              toast.error(error?.message || `Error with ${serverErrors[key]}`);
            }
          });
        } else {
          // @ts-ignore
          const messages = errors?.message;
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(message);
            });
          } else {
            toast.error(
              // @ts-ignore
              (errors?.message || errors?.error) ??
                "Something went wrong! Please try again."
            );
          }
        }

        return Promise.reject(errors);
      }
    }
  );

  interface IPostProps {
    url: string;
    payload?: object;
  }

  return {
    get: async (url: string) => {
      try {
        const data = service.get(url);
        const resolvedData = await Promise.resolve(data);

        const exactData = resolvedData?.data;

        return exactData;
      } catch (error) {
        console.error(error);
      }
    },

    post: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.post(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },

    patch: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.patch(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },

    delete: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.delete(url, { data: payload });
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },

    put: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.put(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },
  };
};

export const clientRequest = (
  baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL!
) => service(baseUrl);
