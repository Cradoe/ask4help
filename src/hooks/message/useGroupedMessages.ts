import { useQuery } from "@tanstack/react-query";
import { Message } from "interfaces";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { clientRequest } from "services/client";

export const useGroupedMessages = () => {
  const params = useParams();
  const userId: string = params.userId as string;

  const [groupedChats, setGroupedChats] = useState<
    { date: string | null; chats: Message[] }[]
  >([]);

  //   get messages from server
  const {
    data: chats,
    isPending,
    error,
    isError,
  } = useQuery<Message[]>({
    queryKey: ["profile"],
    queryFn: () => {
      return clientRequest.message.getChat(userId);
    },
  });

  // group messages by date
  useEffect(() => {
    if (chats && chats.length > 0) {
      // Sort chats in asc order by createdAt
      const sortedChats = chats.sort((a: Message, b: Message) => {
        const dateA = new Date(a.createdAt as string).getTime();
        const dateB = new Date(b.createdAt as string).getTime();
        return dateA - dateB;
      });

      // Group chats by date
      const groupedChats = [];
      let currentDate = null;
      let currentGroup: Message[] = [];

      for (const chat of sortedChats) {
        const chatDate = new Date(
          chat.createdAt as string
        ).toLocaleDateString();

        if (chatDate !== currentDate) {
          if (currentGroup.length > 0) {
            groupedChats.push({
              date: currentDate,
              chats: currentGroup,
            });
          }

          currentDate = chatDate;
          currentGroup = [chat];
        } else {
          currentGroup.push(chat);
        }
      }

      // Add the last group
      if (currentGroup.length > 0) {
        groupedChats.push({
          date: currentDate,
          chats: currentGroup,
        });
      }

      // Now, 'groupedChats' contains an array of objects where each object has a 'date' and 'chats' property.
      // 'chats' is an array of chats for that date.
      setGroupedChats(groupedChats);
    }
  }, [chats]);

  return { data: groupedChats, isPending, error, isError };
};
