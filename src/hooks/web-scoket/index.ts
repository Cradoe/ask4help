import { useAccount } from "hooks/account";
import { Message } from "interfaces";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_WS_URL!);

export const useWebSocket = ({ receiverId }: { receiverId: string }) => {
  const { data: user } = useAccount();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (user) {
      // Authenticate user upon page load
      socket.emit("authenticate", { senderId: user?.id, receiverId });

      // Listen for previous messages
      socket.on("oldMessages", (oldMessages: Message[]) => {
        setMessages((prevMessages) => [...prevMessages, ...oldMessages]);
      });

      // Listen for incoming messages
      socket.on("message", (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      return () => {
        // Clean up event listeners
        socket.off("message");
        socket.off("oldMessages");
      };
    }
  }, [user]);

  const sendMessage = ({ content }: { content: string }) => {
    socket.emit("message", { senderId: user?.id, receiverId, content });
  };

  return { messages, sendMessage };
};
