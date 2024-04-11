"use client";

import { Message } from "interfaces";
import { formatDate } from "lib/util";
import { useAutoScrollToLastMessage, useGroupedMessages } from "hooks/message";
import { SingleMessage } from "./single-message";

export const Messages = ({ messages }: { messages: Message[] }) => {
  const { messages: groupedChats } = useGroupedMessages(messages);

  const { ref } = useAutoScrollToLastMessage(groupedChats);

  return (
    <div className="h-[67vh] md:h-[28rem] overflow-y-auto px-6 pt-5" ref={ref}>
      {groupedChats?.map((group, index: number) => (
        <div key={index}>
          <div className="grid grid-cols-[1fr,auto,1fr] justify-content items-center mb-4">
            <div className="bg-[#C5C5C5]/50 h-px"></div>
            <div className="text-xs bg-neutral-200/60 text-black/60 rounded-full px-4 py-2">
              {formatDate(group?.date as string)}
            </div>
            <div className="bg-[#C5C5C5]/50 h-px"></div>
          </div>

          <div className="flex flex-col gap-10 pb-3">
            {group?.chats?.map((message: Message | undefined, idx: number) => (
              <SingleMessage message={message} key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
