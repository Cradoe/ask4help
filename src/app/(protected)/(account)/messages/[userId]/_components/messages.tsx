"use client";

import { Message } from "interfaces";
import { formatDate } from "lib/util";
import { useAutoScrollToLastMessage, useGroupedMessages } from "hooks/message";
import { useParams } from "next/navigation";
import { useWebSocket } from "hooks/web-scoket";
import { SingleMessage } from "./single-message";

export const Messages = () => {
  const params = useParams();
  const receiverId: string = params.userId as string;

  const { messages } = useWebSocket({
    receiverId,
  });

  const { messages: groupedChats } = useGroupedMessages(messages);

  const { ref } = useAutoScrollToLastMessage(groupedChats);

  return (
    <div className="h-[28rem] overflow-y-auto px-6 pt-5" ref={ref}>
      {groupedChats?.map((group, index: number) => (
        <div key={index}>
          <div className="grid grid-cols-[1fr,auto,1fr] justify-content items-center mb-4">
            <div className="bg-[#C5C5C5] h-px"></div>
            <div className="text-xs bg-neutral-200 rounded-full px-4 py-2">
              {formatDate(group?.date as string)}
            </div>
            <div className="bg-[#C5C5C5] h-px"></div>
          </div>

          <div className="flex flex-col gap-10">
            {group?.chats?.map((message: Message | undefined, idx: number) => (
              <SingleMessage message={message} key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
