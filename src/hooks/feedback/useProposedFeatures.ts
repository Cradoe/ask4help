import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { ProposedFeature } from "interfaces";

export const useProposedFeatures = () => {
  const { data, isPending, error, isError } = useQuery<ProposedFeature[]>({
    queryKey: ["propsed-features"],
    queryFn: () => {
      return clientRequest.feedback.getProposedFeatures();
    },
  });

  return { data, isPending, error, isError };
};
