import { Message } from "interfaces";
import { RenderImageAttachment } from "./render-image";
import { RenderGeneralAttachment } from "./render-general-attachment";

export const RenderAttachment = ({ message }: { message: Message }) => {
  if (message && message?.mimeType) {
    if (message && message?.mimeType?.startsWith("image")) {
      return <RenderImageAttachment message={message} />;
    } else {
      return <RenderGeneralAttachment message={message} />;
    }
  }
  return null;
};
