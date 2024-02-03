import { ChatList } from "./_components/chat-lists";
import { MessageArea } from "./_components/message-area";

export default function Page() {
  return (
    <div className="grid grid-cols-[40%_1fr] gap-x-1">
      <ChatList />
      <MessageArea />
    </div>
  );
}
