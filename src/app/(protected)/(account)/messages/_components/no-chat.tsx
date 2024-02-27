import { PiChatCircleTextBold } from "react-icons/pi";

export const NoMessage = () => {
  return (
    <div className="hidden md:flex flex-col items-center text-neutral-400 gap-4 h-full justify-center">
      <PiChatCircleTextBold className="text-6xl" />
      <div className="text-center text-xs">
        Messages sent after <br />
        connecting with a student or <br />
        study advisor will appear here.
      </div>
    </div>
  );
};
