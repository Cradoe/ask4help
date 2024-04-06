import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { ChatListItem } from "interfaces";
import { useState } from "react";

export const useChatLists = () => {
  const [searchQuery, setSearchQuery] = useState<string>();

  const { data, isPending, error, isError } = useQuery<ChatListItem[]>({
    queryKey: ["message", "contacts", searchQuery],
    queryFn: () => {
      return clientRequest.message.getChatLists(searchQuery);
    },
    refetchInterval: 5_000,
  });

  return { data, isPending, error, isError, searchQuery, setSearchQuery };
};
