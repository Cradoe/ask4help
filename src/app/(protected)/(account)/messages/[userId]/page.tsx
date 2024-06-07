"use client";
import { useParams } from "next/navigation";
import { MessageBox } from "./_components/message-box";
import { Messages } from "./_components/messages";
import { Recipient } from "./_components/recipient";
import { useWebSocket } from "hooks/web-scoket";

export default function Page() {
  const params = useParams();
  const receiverId: string = params.userId as string;

  const { messages, sendMessage, isTyping, sendTypingEvent } = useWebSocket({
    receiverId,
  });

  return (
    <div className="py-3 bg-white md:bg-transparent absolute md:relative top-0 left-0 w-screen md:w-auto h-screen md:h-full">
      <div className="pb-20 md:pb-0 grid grid-rows-[auto_1fr_auto] md:grid-rows-[auto_1fr_20%] h-full">
        <div className="border-b border-b-gray-300">
          <Recipient isTyping={isTyping} />
        </div>
        <div>
          <Messages messages={messages} />
        </div>
        <div className="px-6 pt-2">
          <MessageBox
            sendMessage={sendMessage}
            sendTypingEvent={sendTypingEvent}
          />
        </div>
      </div>
    </div>
  );
}
