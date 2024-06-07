import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { SocialMediaHandle } from "interfaces";

export const useSocialMediaHandles = (userId?: string) => {
  const { data, isPending, error, isError } = useQuery<SocialMediaHandle[]>({
    queryKey: ["profile", "social-media", userId],
    queryFn: () => {
      return clientRequest.account.getSocialHandles(userId);
    },
  });

  return { data, isPending, error, isError };
};
