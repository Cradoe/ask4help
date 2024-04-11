import { Message } from "interfaces";

export const TextMessage = ({ message }: { message: Message }) => {
  const paragraphs = message?.content?.split("\n");

  return (
    <div className="overflow-x-auto">
      {paragraphs?.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
