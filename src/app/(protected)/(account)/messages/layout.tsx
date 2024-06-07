import { ChatList } from "./_components/chat-lists";

export default function ProtectedRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-x-1 ">
      <ChatList />
      <div className="bg-white rounded-r-xl">{children}</div>
    </div>
  );
}
