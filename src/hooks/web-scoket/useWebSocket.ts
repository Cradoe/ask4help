import { useAccount } from "hooks/account";
import { Message } from "interfaces";
import { MessageStatus } from "lib/enum";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { sendMessageValidationSchema } from "validations";
import { InferType } from "yup";

const socket = io("wss://api.ask4help.help"); // TODO:: Remove after debugging
// const socket = io(process.env.NEXT_PUBLIC_WS_URL!);

export const useWebSocket = ({ receiverId }: { receiverId: string }) => {
  const { data: user } = useAccount();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      // Authenticate user upon page load
      socket.emit("authenticate", { senderId: user?.id, receiverId });

      // Listen for old messages
      socket.on("oldMessages", (oldMessages: Message[]) => {
        setMessages(oldMessages);
      });

      // Listen for incoming messages
      socket.on("message", (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      // Listen for typing event
      socket.on("typingEvent", ({ senderId, isTyping: typing }) => {
        if (senderId !== user?.id && typing) {
          setIsTyping(true);
        } else {
          setIsTyping(false);
        }
      });

      // Listen for incoming messages
      socket.on("messageAcknowledged", (messageId) => {
        console.log("messageAcknowledged", messageId);

        // Update the status of the acknowledged message in your state
        setMessages((prevMessages) => {
          return prevMessages?.map((message: Message) => {
            // Check if the message ID matches the acknowledged message
            if (message.id === messageId) {
              // Update the status to "SEEN"
              return { ...message, status: MessageStatus.SEEN };
            }

            return message;
          });
        });
      });

      return () => {
        // Clean up event listeners
        socket.off("message");
        socket.off("oldMessages");
      };
    }
  }, [user, receiverId]);

  const sendMessage = (
    message: InferType<typeof sendMessageValidationSchema>
  ) => {
    socket.emit("message", { senderId: user?.id, receiverId, message });
  };

  const sendTypingEvent = ({ isTyping }: { isTyping: boolean }) => {
    socket.emit("typingEvent", { senderId: user?.id, receiverId, isTyping });
  };

  return { messages, sendMessage, isTyping, sendTypingEvent };
};
