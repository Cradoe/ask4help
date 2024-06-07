import { Message } from "interfaces";
import Image from "next/image";

export const RenderImageAttachment = ({ message }: { message: Message }) => {
  return (
    <a
      href={message.content}
      className="group"
      target="_blank"
      rel="no-referrer"
      download
    >
      <Image
        src={message.content}
        alt="Attachment"
        className="max-w-[200px] max-h-[200px] object-cover rounded-xl"
        height={200}
        width={200}
      />
    </a>
  );
};
