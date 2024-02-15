"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("ws://localhost:8500");
export const useWebSocket = ({ receiverId }: { receiverId: string }) => {
  const userId = "1"; // Replace with actual user ID
  const [messages, setMessages] = useState<
    { senderId: string; content: string }[]
  >([]);

  useEffect(() => {
    // Authenticate user upon page load
    socket.emit("authenticate", userId);

    // Listen for incoming messages
    socket.on("message", (data) => {
      console.log("mesage", data);

      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      // Clean up event listeners
      socket.off("message");
    };
  }, []);

  const sendMessage = ({ content }: { content: string }) => {
    socket.emit("message", { senderId: userId, receiverId, content });
  };
  return { messages, sendMessage };
};
