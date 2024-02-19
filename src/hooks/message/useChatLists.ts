import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { ChatListItem } from "interfaces";

export const useChatLists = () => {
  const { data, isPending, error, isError } = useQuery<ChatListItem[]>({
    queryKey: ["message", "contacts"],
    queryFn: () => {
      return clientRequest.message.getChatLists();
    },
    refetchInterval: 5_000,
  });

  return { data, isPending, error, isError };
};
