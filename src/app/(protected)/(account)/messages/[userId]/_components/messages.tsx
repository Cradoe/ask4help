"use client";

import { useAccount } from "hooks/account";
import { Message, User } from "interfaces";
import { FaUser } from "react-icons/fa";
import { formatDate, getTimeFromDate } from "lib/util";
import { useAutoScrollToLastMessage, useGroupedMessages } from "hooks/message";
import Link from "next/link";

export const Messages = ({
  messages,
  receiver,
}: {
  messages: Message[];
  receiver: User | undefined;
}) => {
  const { data: sender } = useAccount();

  const { messages: groupedChats } = useGroupedMessages(messages);

  const { ref } = useAutoScrollToLastMessage(groupedChats);

  return (
    <div className="h-[28rem] overflow-y-auto px-6" ref={ref}>
      {groupedChats?.map((group, index: number) => (
        <div key={index}>
          <div className="grid grid-cols-[1fr,auto,1fr] justify-content items-center">
            <div className="bg-[#C5C5C5] h-px"></div>
            <div className="text-xs bg-neutral-200 rounded-full px-4 py-2">
              {formatDate(group?.date as string)}
            </div>
            <div className="bg-[#C5C5C5] h-px"></div>
          </div>

          <div className="flex flex-col gap-10">
            {group?.chats?.map((chat: Message | undefined, idx: number) => (
              <div className={`flex justify-start`} key={idx}>
                <div className={`flex justify-start w-[80%] gap-1`}>
                  <div>
                    <div className="text-3xl rounded-full p-2 border border-gray-200 bg-secondary-600 text-white">
                      <FaUser aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-3">
                      {/* sender details  */}
                      {chat?.senderId === sender?.id ? (
                        <div className="text-secondary-600 font-medium">
                          You
                        </div>
                      ) : (
                        <Link
                          href={`/profile/${receiver?.id}`}
                          className="text-secondary-600 font-medium hover:underline"
                        >
                          {receiver?.firstName} {receiver?.lastName}
                        </Link>
                      )}

                      <div className="text-[0.7rem] mt-2">
                        {getTimeFromDate(chat?.createdAt as string)}
                      </div>
                    </div>
                    <div className={`text-black text-sm mt-2`}>
                      <Paragraphs content={chat?.content || ""} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Paragraphs = ({ content }: { content: string }) => {
  const paragraphs = content?.split("\n");

  return (
    <div>
      {paragraphs?.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
