import { useAccount } from "hooks/account";
import { Message } from "interfaces";
import { MessageStatus } from "lib/enum";
import { useEffect } from "react";
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_WS_URL!);

export const useAcknowledgeMessage = ({
  receiverId,
  message,
}: {
  receiverId: string;
  message: Message | undefined;
}) => {
  const { data: user } = useAccount();

  const acknowledgeMessage = () => {
    // console.log("acknowledgeMessage");
    socket.emit("acknowledgeMessage", {
      senderId: user?.id,
      receiverId,
      messageId: message?.id,
    });
  };

  useEffect(() => {
    if (message && user) {
      if (message?.status !== MessageStatus.SEEN) {
        // send acknowledgement if the logged in user is not the sender of the message
        if (message?.sender?.id !== user?.id) {
          acknowledgeMessage();
        }
      }
    }
  }, [message, user]);
};
