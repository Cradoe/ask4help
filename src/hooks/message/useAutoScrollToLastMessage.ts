import { useEffect, useRef } from "react";

export const useAutoScrollToLastMessage = (groupedChats: any) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom when messages are updated
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [groupedChats]);

  return { ref };
};
