import { useQuery } from "@tanstack/react-query";
import { SopDocument } from "interfaces";
import { clientRequest } from "services/client";

export const useSopDocument = (documentId: string) => {
  const { data, error, isError, isPending } = useQuery<SopDocument>({
    queryKey: ["sop-tasks", documentId, "document"],
    queryFn: () => {
      return clientRequest.task.getOneSopTaskDocument(documentId);
    },
  });

  return {
    data,
    error,
    isPending,
    isError,
  };
};
