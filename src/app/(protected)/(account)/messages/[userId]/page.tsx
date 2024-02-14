import { MessageBox } from "./_components/message-box";
import { Messages } from "./_components/messages";
import { Recepient } from "./_components/recepient";

export default function Page() {
  return (
    <div className="py-3 h-full">
      <div className="grid grid-rows-[13%_1fr_20%] h-full">
        <div className="border-b border-b-gray-300">
          <Recepient />
        </div>
        <div className="">
          <Messages />
        </div>
        <div className="px-6">
          <MessageBox />
        </div>
      </div>
    </div>
  );
}
