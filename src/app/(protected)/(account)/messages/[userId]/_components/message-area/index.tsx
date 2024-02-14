import { MessageBox } from "./message-box";
import { Messages } from "./messages";
import { Recepient } from "./recepient";

export const MessageArea = () => {
  return (
    <div className="bg-white py-3 rounded-r-xl">
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
};
