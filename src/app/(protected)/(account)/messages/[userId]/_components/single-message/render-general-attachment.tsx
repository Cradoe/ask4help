import { Card } from "components/card";
import { Message } from "interfaces";
import { ImAttachment } from "react-icons/im";

export const RenderGeneralAttachment = ({ message }: { message: Message }) => {
  return (
    <a
      href={message.content}
      className="group"
      target="_blank"
      rel="no-referrer"
      download
    >
      <Card className="group-hover:bg-secondary-50 flex items-center gap-2">
        <ImAttachment /> <span>Attachment</span>
      </Card>
    </a>
  );
};
