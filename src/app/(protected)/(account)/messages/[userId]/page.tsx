"use client";
import { useWebSocket } from "hooks/web-scoket";
import { MessageBox } from "./_components/message-box";
import { Messages } from "./_components/messages";
import { Recipient } from "./_components/recipient";
import { useParams } from "next/navigation";
import { useUserDetails } from "hooks/user";

export default function Page() {
  const params = useParams();
  const receiverId: string = params.userId as string;

  const { data: receiver } = useUserDetails(receiverId);

  const { messages, sendMessage } = useWebSocket({ receiverId });
  return (
    <div className="py-3 h-full">
      <div className="grid grid-rows-[13%_1fr_20%] h-full">
        <div className="border-b border-b-gray-300">
          <Recipient user={receiver} />
        </div>
        <div className="">
          <Messages messages={messages} receiver={receiver} />
        </div>
        <div className="px-6">
          <MessageBox sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}
