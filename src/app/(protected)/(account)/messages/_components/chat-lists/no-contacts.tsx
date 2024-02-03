import { BsChat } from "react-icons/bs";

export const NoContact = () => {
  return (
    <div className="flex flex-col items-center text-neutral-400 gap-4 pt-20">
      <BsChat className="text-4xl" />
      <div className="text-center text-xs">
        No messages yet, start <br /> a conversion with your <br /> connection
      </div>
    </div>
  );
};
