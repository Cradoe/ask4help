import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { SocialMediaHandle } from "interfaces";

export const useSocialMediaHandles = () => {
  const { data, isPending, error, isError } = useQuery<SocialMediaHandle[]>({
    queryKey: ["profile", "social-media"],
    queryFn: () => {
      return clientRequest.account.getSocialHandles();
    },
  });

  return { data, isPending, error, isError };
};
