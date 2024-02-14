"use client";

import { useAccount } from "hooks/account";
import { Message } from "interfaces";
import { FaUser } from "react-icons/fa";
import { formatDate, getTimeAgo } from "lib/util";
import { useGroupedMessages } from "hooks/message";

export const Messages = () => {
  const { data: user } = useAccount();
  const { data: groupedChats } = useGroupedMessages();

  return (
    <div>
      {groupedChats?.map((group, index: number) => (
        <div key={index}>
          <div className="grid grid-cols-[1fr,auto,1fr] justify-content items-center gap-3 my-6">
            <div className="bg-[#C5C5C5] h-px"></div>
            <div className="font-semibold">
              {formatDate(group?.date as string)}
            </div>
            <div className="bg-[#C5C5C5] h-px"></div>
          </div>
          {/* chats */}
          <div className="flex flex-col gap-10">
            {group?.chats?.map((chat: Message, idx: number) => (
              <div
                className={`flex ${
                  user?.id === chat?.sender?.id
                    ? "justify-end"
                    : "justify-start"
                }`}
                key={idx}
              >
                <div
                  className={`flex ${
                    user?.id === chat?.sender?.id
                      ? "justify-end"
                      : "justify-start"
                  } w-1/3 gap-3`}
                >
                  <div>
                    <div className="text-xl rounded-full p-2 border border-gray-200">
                      <FaUser aria-hidden="true" />
                    </div>
                  </div>

                  <div
                    className={`${
                      user?.id === chat?.sender?.id
                        ? "order-first"
                        : "order-last"
                    }`}
                  >
                    <div
                      className={`${
                        user?.id === chat?.sender?.id
                          ? "bg-primary/10"
                          : "bg-[#F4F6F5]"
                      } text-black text-sm rounded-xl p-4`}
                    >
                      {chat?.message}
                    </div>
                    <div className="text-[0.7rem] mt-2">
                      {getTimeAgo(chat?.createdAt as string)}
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
