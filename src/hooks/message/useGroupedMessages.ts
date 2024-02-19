/**
 * useGroupedMessages Hook
 *
 * A hook that groups an array of chat messages by date. The grouping is done
 * when a new message is added to the chats array, and it checks for an existing group
 * based on the message's `createdAt` property. If an existing
 * group is found, the new message is appended to that group; otherwise, a new group
 * is created for the new message.
 *
 *
 * @returns {Object} An object containing the grouped messages.
 * @property {Object[]} messages - An array of grouped messages, where each object
 *                                has a `date` property representing the date of the
 *                                messages and a `chats` property containing an array
 *                                of chat messages for that date.
 *
 */

import { Message } from "interfaces";
import { useMemo, useEffect, useState } from "react";

interface GroupedChat {
  date: string | undefined;
  chats: (Message | undefined)[];
}

export const useGroupedMessages = (chats: Message[]) => {
  const [groupedChats, setGroupedChats] = useState<GroupedChat[]>([]);

  useEffect(() => {
    if (chats && chats.length > 0) {
      setGroupedChats((prevGroupedChats) => {
        // check if there are any previously grouped chats
        if (prevGroupedChats?.length > 0) {
          return updateGroupedChats(prevGroupedChats);
        } else {
          return newGroupedChats();
        }
      });
    }

    const updateGroupedChats = (prevGroupedChats: GroupedChat[]) => {
      const newMessage = chats[chats.length - 1]; // since new messages are added at the end

      // Check if there's an existing group for the new message
      const existingGroupIndex = prevGroupedChats.findIndex((group) => {
        const groupDate = new Date(group?.date!)?.toLocaleDateString() || "";
        const newMessageDate =
          new Date(newMessage?.createdAt!)?.toLocaleDateString() || "";
        return groupDate === newMessageDate;
      });

      if (existingGroupIndex !== -1) {
        // Append the new message to the existing group
        const updatedGroupedChats = [...prevGroupedChats];

        // check if newMessage is not already in group
        const isNewMessageIncluded =
          updatedGroupedChats[existingGroupIndex]?.chats.some(
            (chat) => chat?.createdAt === newMessage?.createdAt
          ) || false;

        if (!isNewMessageIncluded) {
          updatedGroupedChats[existingGroupIndex]?.chats.push(newMessage);
        }
        return updatedGroupedChats;
      } else {
        // Create a new group for the new message
        return [
          ...prevGroupedChats,
          { date: newMessage?.createdAt, chats: [newMessage] },
        ];
      }
    };

    const newGroupedChats = () => {
      // Sort chats in asc order by createdAt
      const sortedChats = chats.sort((a, b) => {
        const dateA = new Date(a.createdAt as string).getTime();
        const dateB = new Date(b.createdAt as string).getTime();
        return dateA - dateB;
      });

      // Group chats by date
      const groupedChats = [];
      let currentDate: string | undefined = undefined;
      let currentGroup: (Message | undefined)[] = [];

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

      return groupedChats;
    };
  }, [chats]);

  const messages = useMemo(() => groupedChats, [groupedChats]);

  return { messages };
};
