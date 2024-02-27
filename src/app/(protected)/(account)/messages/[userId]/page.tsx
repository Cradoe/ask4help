"use client";
import { MessageBox } from "./_components/message-box";
import { Messages } from "./_components/messages";
import { Recipient } from "./_components/recipient";

export default function Page() {
  return (
    <div className="py-3 bg-white md:bg-transparent absolute md:relative top-0 left-0 w-screen md:w-auto h-screen md:h-full">
      <div className="grid grid-rows-[auto_1fr_auto] md:grid-rows-[auto_1fr_20%] h-full">
        <div className="border-b border-b-gray-300">
          <Recipient />
        </div>
        <div>
          <Messages />
        </div>
        <div className="px-6 pt-2">
          <MessageBox />
        </div>
      </div>
    </div>
  );
}
