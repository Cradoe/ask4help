"use client";
import { useWebSocket } from "hooks/web-scoket";
import { MessageBox } from "./_components/message-box";
import { Messages } from "./_components/messages";
import { Recipient } from "./_components/recipient";

export default function Page() {
  const { messages, sendMessage } = useWebSocket({ receiverId: "1" });
  return (
    <div className="py-3 h-full">
      <div className="grid grid-rows-[13%_1fr_20%] h-full">
        <div className="border-b border-b-gray-300">
          <Recipient />
        </div>
        <div className="">
          <Messages messages={messages} />
        </div>
        <div className="px-6">
          <MessageBox sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}
